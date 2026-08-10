(function () {
  'use strict';

  // Sinaliza que há JS: os reveals só ficam ocultos sob html.js
  // (sem JS, a página inteira permanece visível — progressive enhancement)
  document.documentElement.classList.add('js');

  // Navbar: hairline inferior após o primeiro scroll
  var nav = document.querySelector('.nav');
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveals: uma vez só, ao entrar na viewport
  var toReveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    toReveal.forEach(function (el) { io.observe(el); });
  } else {
    toReveal.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
