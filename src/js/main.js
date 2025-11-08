// main.js - Main JavaScript file for the professional portfolio

document.addEventListener('DOMContentLoaded', () => {
  const hamburgers = document.querySelectorAll('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgers.forEach(hamburger => {
    hamburger.addEventListener('click', (e) => {
      hamburgers.forEach(h => h.classList.toggle('active'));
      if (mobileMenu) mobileMenu.classList.toggle('active');
      e.stopPropagation();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      Array.from(hamburgers).some(h => h.classList.contains('active')) &&
      mobileMenu.classList.contains('active') &&
      !e.target.closest('.mobile-menu') &&
      !e.target.closest('.hamburger')
    ) {
      hamburgers.forEach(h => h.classList.remove('active'));
      mobileMenu.classList.remove('active');
    }
  });

  // ESC to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hamburgers.forEach(h => h.classList.remove('active'));
      if (mobileMenu) mobileMenu.classList.remove('active');
    }
  });
});