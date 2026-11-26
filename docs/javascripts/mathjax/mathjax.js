window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams'        // optional: auto-numbering support
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    ignoreHtmlClass: '',             // process everything
    processHtmlClass: 'arithmatex'   // (kept for compatibility)
  },
  svg: { fontCache: 'global' }
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
