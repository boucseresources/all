// cover-page.js
(function () {
  const statusEl = document.getElementById('status');
  const saveBtn = document.getElementById('saveBtn');
  const clearBtn = document.getElementById('clearBtn');
  const docTypeEl = document.getElementById('docType');

  // টাইপভেদে আলাদা স্টোরেজ কী
  const STORAGE_PREFIX = 'bouCseCover';
  const storageKeyFor = (type) => `${STORAGE_PREFIX}.${type}`;

  // সব editable ফিল্ড
  const fields = Array.from(document.querySelectorAll('[contenteditable][data-key]'));
  // টাইপভিত্তিক লেবেল (UI টেক্সট বদলাবে)
  const i18nMap = {
    lab: {
      noLabel: 'Lab Report No.',
      topicLabel: 'Lab Report On',
    },
    assignment: {
      noLabel: 'Assignment No.',
      topicLabel: 'Assignment Topic',
    }
  };

  // --- helpers ---
  function flashStatus(msg, ms = 900) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    setTimeout(() => (statusEl.textContent = ''), ms);
  }

  function setLabelsFor(type) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const txt = i18nMap[type]?.[key];
      if (txt) el.textContent = txt;
    });
  }

  function collectData() {
    const data = {};
    fields.forEach(el => {
      data[el.dataset.key] = el.innerText.trim();
    });
    return data;
  }

  function applyData(data) {
    fields.forEach(el => {
      el.innerText = (data && data[el.dataset.key]) || '';
    });
  }

  function saveToLS(type, data) {
    localStorage.setItem(storageKeyFor(type), JSON.stringify(data));
    flashStatus('Saved');
  }

  function loadFromLS(type) {
    const raw = localStorage.getItem(storageKeyFor(type));
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  function clearLS(type) {
    localStorage.removeItem(storageKeyFor(type));
  }

  // রিচ টেক্সট পেস্ট ব্লক করুন (plain text রাখি)
  fields.forEach(el => {
    el.addEventListener('paste', e => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text');
      document.execCommand('insertText', false, text);
    });
  });

  // অটো-সেভ (টাইপভেদে)
  let debounce;
  function scheduleAutoSave() {
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(() => {
      const type = docTypeEl.value;
      saveToLS(type, collectData());
    }, 400);
  }
  fields.forEach(el => {
    el.addEventListener('input', scheduleAutoSave);
    el.addEventListener('blur', scheduleAutoSave);
  });

  // Save / Update
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const type = docTypeEl.value;
      saveToLS(type, collectData());
    });
  }

  // Clear (LS + ফর্ম) – বর্তমান টাইপ অনুযায়ী
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const type = docTypeEl.value;
      if (confirm(`"${type.toUpperCase()}" টাইপের Saved data এবং ফর্ম ফাঁকা করা হবে, নিশ্চিত?`)) {
        clearLS(type);
        applyData({});
        flashStatus('Cleared');
      }
    });
  }

  // টাইপ বদলালে: লেবেল বদলান + সেই টাইপের সেভড ডেটা লোড করুন
  if (docTypeEl) {
    docTypeEl.addEventListener('change', () => {
      const type = docTypeEl.value;
      setLabelsFor(type);
      applyData(loadFromLS(type));
      flashStatus(`Switched to ${type}`);
    });
  }

  // প্রথম লোডে: ডিফল্ট টাইপ = lab, লেবেল সেট + ডেটা লোড
  document.addEventListener('DOMContentLoaded', () => {
    const type = (docTypeEl && docTypeEl.value) || 'lab';
    setLabelsFor(type);
    applyData(loadFromLS(type));
  });
})();
