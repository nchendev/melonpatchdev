// MelonPatch Shared JS

// Dark mode toggle
function initDarkMode() {
  const toggle = document.querySelector('.dark-toggle');
  const saved = localStorage.getItem('melonpatch-dark');

  if (saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
    document.documentElement.classList.add('dark');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('melonpatch-dark', document.body.classList.contains('dark'));
      updateToggleIcon();
    });
  }

  updateToggleIcon();
}

function updateToggleIcon() {
  const toggle = document.querySelector('.dark-toggle');
  if (!toggle) return;
  toggle.textContent = document.body.classList.contains('dark') ? '\u2600' : '\u263E';
}

// Scroll reveal animations
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');

  function checkReveal() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Check on load
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Mobile nav toggle
function initMobileNav() {
  const burger = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.mobile-nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }
}

// Init all
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initScrollReveal();
  initSmoothScroll();
  initMobileNav();
});
