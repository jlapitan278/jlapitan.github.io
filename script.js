/* =============================================================
   script.js — Scroll-triggered fade-in animations
   Adds an `in-view` class to elements with `.fade-in-down`
   the first time they enter the viewport. CSS in style.css
   handles the actual transition.
   ============================================================= */
(function () {
  // If IntersectionObserver isn't supported, just show everything.
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in-down').forEach(function (el) {
      el.classList.add('in-view');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Stop watching this element — animations only play once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in-down').forEach(function (el) {
    observer.observe(el);
  });
})();
