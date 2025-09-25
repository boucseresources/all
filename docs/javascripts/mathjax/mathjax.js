window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*",          // ignore everything…
    processHtmlClass: "arithmatex"  // …except inside .arithmatex
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
