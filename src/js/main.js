// main.js - Main JavaScript file for the professional portfolio

// Use event delegation so handlers work even when partials are injected later.
document.addEventListener('click', (e) => {
  const clickedHamburger = e.target.closest('.hamburger');

  if (clickedHamburger) {
    const hamburgers = document.querySelectorAll('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgers.forEach(h => h.classList.toggle('active'));
    if (mobileMenu) mobileMenu.classList.toggle('active');
    e.stopPropagation();
    return;
  }

  // Click outside -> close menu if open
  const openHamburgerExists = Array.from(document.querySelectorAll('.hamburger')).some(h => h.classList.contains('active'));
  const mobileMenu = document.querySelector('.mobile-menu');
  if (openHamburgerExists && mobileMenu && mobileMenu.classList.contains('active')) {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
      document.querySelectorAll('.hamburger').forEach(h => h.classList.remove('active'));
      mobileMenu.classList.remove('active');
    }
  }
});

// ESC to close menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.hamburger').forEach(h => h.classList.remove('active'));
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');
  }
});