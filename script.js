/* =============================================================
   script.js — Site-wide ambient effects and scroll animations
   ============================================================= */

/* ---------------------------------------------------------------
   1. Floating accent particles
   Inject a fixed-position particle layer into <body> on every page.
   The layer is z-index: -1 so it sits behind all content. A CSS
   mask in style.css fades the particles out toward the viewport
   bottom so the lower portion of the page feels calmer.
--------------------------------------------------------------- */
(function setupParticles() {
  // Respect users who've requested reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Skip if a particle layer is already present (defensive)
  if (document.querySelector('.particles')) return;

  // Tuned values — varied so the field doesn't feel mechanical.
  // x: horizontal position (%); delay/dur: animation timing (s);
  // drift: horizontal sway during rise (px); size: dot radius (px).
  var PARTICLES = [
    { x:  4, delay: 0,   dur: 11, drift:  24, size: 3 },
    { x: 10, delay: 2.4, dur:  9, drift: -18, size: 2 },
    { x: 16, delay: 4.8, dur: 12, drift:  30, size: 4 },
    { x: 22, delay: 1,   dur: 10, drift: -22, size: 3 },
    { x: 28, delay: 5.5, dur:  8, drift:  16, size: 2 },
    { x: 34, delay: 3,   dur: 11, drift: -25, size: 3 },
    { x: 40, delay: 7,   dur:  9, drift:  20, size: 2 },
    { x: 46, delay: 1.8, dur: 12, drift: -16, size: 3 },
    { x: 52, delay: 4,   dur: 10, drift:  28, size: 4 },
    { x: 58, delay: 6.5, dur:  8, drift: -20, size: 2 },
    { x: 64, delay: 2.2, dur: 11, drift:  22, size: 3 },
    { x: 70, delay: 5,   dur:  9, drift: -26, size: 2 },
    { x: 76, delay: 8,   dur: 10, drift:  18, size: 2 },
    { x: 82, delay: 3.6, dur: 12, drift: -28, size: 3 },
    { x: 88, delay: 7.5, dur:  9, drift:  22, size: 2 },
    { x: 94, delay: 1.5, dur: 11, drift: -20, size: 3 },
    { x:  7, delay: 5.8, dur: 10, drift:  26, size: 2 },
    { x: 19, delay: 8.5, dur: 12, drift: -22, size: 3 },
    { x: 31, delay: 9,   dur:  9, drift:  24, size: 2 },
    { x: 43, delay: 6,   dur: 11, drift: -18, size: 3 },
    { x: 55, delay: 2.8, dur: 10, drift:  22, size: 2 },
    { x: 67, delay: 7.2, dur: 11, drift: -24, size: 3 },
    { x: 79, delay: 4.5, dur:  9, drift:  20, size: 2 },
    { x: 91, delay: 8.8, dur: 10, drift: -22, size: 2 },
    { x: 13, delay: 3.2, dur: 12, drift:  26, size: 3 },
    { x: 25, delay: 7.6, dur:  9, drift: -20, size: 2 },
    { x: 37, delay: 5.4, dur: 11, drift:  24, size: 3 },
    { x: 49, delay: 9.2, dur: 10, drift: -26, size: 2 },
    { x: 61, delay: 4.8, dur: 12, drift:  22, size: 3 },
    { x: 73, delay: 6.8, dur:  9, drift: -18, size: 2 }
  ];

  var container = document.createElement('div');
  container.className = 'particles';
  container.setAttribute('aria-hidden', 'true');

  PARTICLES.forEach(function (p) {
    var span = document.createElement('span');
    span.className = 'particle';
    span.style.cssText =
      '--x:'     + p.x     + '%;'  +
      '--delay:' + p.delay + 's;'  +
      '--dur:'   + p.dur   + 's;'  +
      '--drift:' + p.drift + 'px;' +
      '--size:'  + p.size  + 'px;';
    container.appendChild(span);
  });

  document.body.appendChild(container);
})();


/* ---------------------------------------------------------------
   2. Scroll-triggered fade-in animations
   Adds an `in-view` class to elements with `.fade-in-down` the
   first time they enter the viewport. CSS in style.css handles
   the actual transition.
--------------------------------------------------------------- */
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
