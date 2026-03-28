/* ============================================
   BAGICHA — Shared Script (js/script.js)
   Theme toggle, hamburger, scroll, reveal, toast
   ============================================ */

/* ---------- Toast Notification ---------- */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ---------- Theme Toggle ---------- */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const savedTheme = localStorage.getItem('bagicha_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('bagicha_theme', next);
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

/* ---------- Hamburger Menu ---------- */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ---------- Navbar Scroll Effect ---------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ---------- Scroll Reveal ---------- */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => observer.observe(el));
}

/* ---------- Init All Shared ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHamburger();
  initNavbarScroll();
  initReveal();
});
