// main.js - Main JavaScript file for the professional portfolio

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully.');

    // quick debug: confirm partial elements exist (if partials are injected async)
    console.log('hamburger present:', !!document.querySelector('.hamburger'));
    console.log('mobile-menu present:', !!document.querySelector('.mobile-menu'));
    console.log('sidebar present:', !!document.querySelector('.sidebar'));

    loadProjects();

    // Delegated click handler (works even if partials are injected later)
    document.addEventListener('click', (e) => {
        const clickedHamburger = e.target.closest('.hamburger');
        if (clickedHamburger && clickedHamburger.offsetParent !== null) { // only visible hamburger
            const mobileMenu = document.querySelector('.mobile-menu');
            clickedHamburger.classList.toggle('active');
            if (mobileMenu) mobileMenu.classList.toggle('active');
            e.stopPropagation();
            return;
        }
        // Close menu when clicking outside
        const openHamburger = document.querySelector('.hamburger.active');
        const openMobileMenu = document.querySelector('.mobile-menu.active');
        if (openHamburger && openMobileMenu) {
            if (!e.target.closest('.mobile-menu')) {
                openHamburger.classList.remove('active');
                openMobileMenu.classList.remove('active');
            }
        }
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openHamburger = document.querySelector('.hamburger.active');
            const openMobileMenu = document.querySelector('.mobile-menu.active');
            if (openHamburger) openHamburger.classList.remove('active');
            if (openMobileMenu) openMobileMenu.classList.remove('active');
        }
    });
});

function loadProjects() {
    fetch('../data/projects.json') 
        .then(response => response.json())
        .then(data => {
            console.log('projects loaded:', data.length || Object.keys(data).length);
        })
        .catch(error => {
            console.error('Error loading projects:', error);
        });
}