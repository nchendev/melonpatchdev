// MelonPatch Shared JS

// Dark mode toggle (initial state is handled by inline script in <head>)
function initDarkMode() {
  const toggle = document.querySelector('.dark-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('melonpatch-dark', isDark);
    toggle.textContent = isDark ? '\u2600' : '\u263E';
  });

  // Set initial icon
  toggle.textContent = document.documentElement.classList.contains('dark') ? '\u2600' : '\u263E';
}

// Scroll reveal animations using IntersectionObserver
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0,
    rootMargin: '0px 0px -120px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Mobile nav toggle
function initMobileNav() {
  const burger = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');

  if (!burger || !nav) return;

  function closeNav() {
    nav.classList.remove('open');
    burger.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  function openNav() {
    nav.classList.add('open');
    burger.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
  }

  burger.addEventListener('click', () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeNav);
  }

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// Init all
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initScrollReveal();
  initMobileNav();
});
