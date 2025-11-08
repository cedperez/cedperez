// Add this to your main JS file or a new script
document.addEventListener('DOMContentLoaded', function() {
    const row = document.querySelector('.skills-stack-row.auto-scroll');
    if (!row) return;

    // Duplicate icons for seamless loop
    row.innerHTML += row.innerHTML;

    let scrollAmount = 0;
    const speed = 0.3; // Lower = slower

    function autoScroll() {
        scrollAmount += speed;
        if (scrollAmount >= row.scrollWidth / 2) {
            scrollAmount = 0; // Reset for seamless loop
        }
        row.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
    }
    autoScroll();

    const showLink = document.getElementById('show-skills-list');
    const inlineList = document.getElementById('skills-list-inline');
    const closeBtn = document.getElementById('close-skills-list');

    if (showLink && inlineList && closeBtn) {
        showLink.addEventListener('click', function(e) {
            e.preventDefault();
            inlineList.style.display = 'block';
        });
        closeBtn.addEventListener('click', function() {
            inlineList.style.display = 'none';
        });
    }
});