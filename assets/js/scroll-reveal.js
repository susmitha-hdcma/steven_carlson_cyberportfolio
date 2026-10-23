/* Gentle scroll-triggered reveals for Steven Carlson's portfolio. */
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  document.documentElement.classList.add('js-scroll-reveal');

  var selectors = [
    '.hero-kicker', '.hero-grid > *', '.hero-badges', '.proof-item',
    '.section-head', '.xp-item', '.build', '.cred-block', '.cred-item',
    '.matrix-cell', '.case-section', '.case-hero', '.contact-inner',
    '.dossier', '.proof-grid > *'
  ];
  var seen = new WeakSet();
  var elements = [];
  selectors.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      if (seen.has(el)) return;
      seen.add(el);
      el.classList.add('scroll-reveal');
      elements.push(el);
    });
  });

  // Stagger sibling items slightly so they don't all appear at once.
  var siblingGroups = new Map();
  elements.forEach(function (el) {
    var parent = el.parentElement;
    if (!parent) return;
    if (!siblingGroups.has(parent)) siblingGroups.set(parent, []);
    siblingGroups.get(parent).push(el);
  });
  siblingGroups.forEach(function (group) {
    group.forEach(function (el, index) {
      el.style.setProperty('--reveal-delay', Math.min(index * 90, 360) + 'ms');
    });
  });

  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();
