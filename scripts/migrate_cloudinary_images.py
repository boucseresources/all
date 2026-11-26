"""Apply verified Cloudinary uploads to the tracked documentation.

Uses .cache/cloudinary-manifest.json (original paths and SHA-256 hashes) and
.cache/cloudinary-ids.json (public IDs collected from Cloudinary's media library).
Run without --apply for a preview. Originals are retained unless --remove is set.
No credentials are read or written by this script.
"""

import argparse
import collections
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
IMAGE_EXT = r"(?:png|jpe?g|webp|gif)"
MD_LINK = re.compile(
    r"!?\[[^\]\n]*\]\(\s*(?:<(?P<angle>[^<>\n]+?\." + IMAGE_EXT
    + r"(?:[?#][^<>\n]*)?)>|(?P<plain>[^<>\n]+?\." + IMAGE_EXT
    + r"(?:[?#][^\s)]*)?))(?=\s*(?:\)|[\"']))", re.I
)
HTML_LINK = re.compile(r"\b(?:src|href|poster)\s*=\s*([\"'])(?P<url>.*?)\1", re.I)
CSS_LINK = re.compile(r"url\(\s*([\"']?)(?P<url>[^)\"']+)\1\s*\)", re.I)
META_IMAGE = re.compile(r"^(?:image|thumbnail|cover):\s*[\"']?(?P<url>[^\r\n\"']+?\.(?:png|jpe?g|webp|gif))[\"']?\s*$", re.M | re.I)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--remove", action="store_true")
    args = parser.parse_args()
    if args.remove and not args.apply:
        parser.error("--remove requires --apply")

    assets = json.loads((ROOT / ".cache/cloudinary-manifest.json").read_text(encoding="utf-8"))["assets"]
    ids = json.loads((ROOT / ".cache/cloudinary-ids.json").read_text(encoding="utf-8"))
    by_path = {}
    for asset in assets:
        index = str(asset["index"])
        public_id = ids.get(index)
        if not public_id or not re.fullmatch(r"bou20261126_" + index.zfill(4) + r"_[A-Za-z0-9]+", public_id):
            raise SystemExit(f"Missing or unexpected verified public ID for image {index}")
        # Keep original GIF delivery so animation is preserved. Optimize static images
        # without resizing, so diagram labels remain readable at full resolution.
        transform = "" if asset["ext"] == ".gif" else "f_auto,q_auto/"
        asset["url"] = f"https://res.cloudinary.com/zopgecx6/image/upload/{transform}{public_id}{asset['ext']}"
        for path in asset["paths"]:
            by_path[(ROOT / path).resolve()] = asset

    tracked = subprocess.check_output(["git", "ls-files", "-z"], cwd=ROOT).decode("utf-8").split("\0")
    doc_files = [ROOT / p for p in tracked if p.startswith("docs/") and not any(x.startswith(".") for x in Path(p).parts)]
    file_map = collections.defaultdict(list)
    for path in doc_files:
        file_map[path.name].append(path.resolve())

    unresolved = []
    replacements = []

    def resolve(url, page):
        url = url.strip()
        parsed = urlsplit(url)
        if parsed.scheme or parsed.netloc or url.startswith(("#", "data:")):
            return None
        name = unquote(parsed.path).replace("\\", "/")
        if Path(name).suffix.lower() not in {".png", ".jpg", ".jpeg", ".gif", ".webp"}:
            return None
        direct = ((ROOT / name) if name.startswith("docs/") else
                  (DOCS / name.lstrip("/")) if name.startswith("/") else (page.parent / name)).resolve()
        chosen = direct if direct.is_file() else None
        if chosen is None:
            candidates = [p for p in file_map[Path(name).name] if p.as_posix().endswith(name)]
            if candidates:
                # Same nearest-path rule used by mkdocs-obsidian-bridge.
                chosen = min(candidates, key=lambda p: len(Path(os.path.relpath(p, page.parent)).parts))
        if chosen in by_path:
            asset = by_path[chosen]
            suffix = ("?" + parsed.query if parsed.query else "") + ("#" + parsed.fragment if parsed.fragment else "")
            replacements.append({"page": page.relative_to(ROOT).as_posix(), "source": chosen.relative_to(ROOT).as_posix(), "url": asset["url"] + suffix})
            return asset["url"] + suffix
        if chosen is None:
            unresolved.append({"page": page.relative_to(ROOT).as_posix(), "target": url})
        return None

    changed = {}
    for path in doc_files:
        if path.suffix.lower() not in {".md", ".html", ".css"}:
            continue
        original = path.read_bytes()
        try:
            text = original.decode("utf-8")
        except UnicodeError:
            continue

        def replace(match, group):
            value = match.group(group)
            url = resolve(value, path)
            if url is None:
                return match.group(0)
            start, end = match.span(group)
            return match.group(0)[:start-match.start()] + url + match.group(0)[end-match.start():]

        text = MD_LINK.sub(lambda m: replace(m, "angle" if m.group("angle") else "plain"), text)
        text = HTML_LINK.sub(lambda m: replace(m, "url"), text)
        text = CSS_LINK.sub(lambda m: replace(m, "url"), text)
        if text.startswith("---"):
            frontmatter_end = text.find("\n---", 3)
            if frontmatter_end != -1:
                text = META_IMAGE.sub(lambda m: replace(m, "url"), text[:frontmatter_end]) + text[frontmatter_end:]
        if text.encode("utf-8") != original:
            changed[path] = text.encode("utf-8")

    # Validate all originals and backups before changing anything.
    for path, asset in by_path.items():
        if path.is_file() and hashlib.sha256(path.read_bytes()).hexdigest() != asset["sha256"]:
            raise SystemExit(f"Original changed since inventory: {path}")
        backup = Path(asset["stage_path"])
        if not backup.is_file() or hashlib.sha256(backup.read_bytes()).hexdigest() != asset["sha256"]:
            raise SystemExit(f"Missing or changed backup: {backup}")

    report = {"unique_uploads": len(assets), "source_files": len(by_path), "changed_pages": len(changed), "replacements": replacements, "unresolved_existing_links": unresolved}
    (ROOT / ".cache/cloudinary-rewrite-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    if args.apply:
        for path, content in changed.items():
            path.write_bytes(content)
        mapping = [{"sha256": a["sha256"], "paths": a["paths"], "url": a["url"]} for a in assets]
        (ROOT / "cloudinary-images.json").write_text(json.dumps(mapping, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        if args.remove:
            for path in by_path:
                path.unlink(missing_ok=True)
    print(json.dumps({"applied": args.apply, "removed_originals": args.remove, "unique_uploads": len(assets), "source_files": len(by_path), "changed_pages": len(changed), "replaced_links": len(replacements), "unresolved_existing_links": len(unresolved)}, indent=2))


if __name__ == "__main__":
    main()
