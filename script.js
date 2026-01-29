// Minimal JavaScript for interactions
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const directions = document.getElementById('directions');
    const dropdown = document.getElementById('dropdown');
    const arrow = document.getElementById('arrow');

    // Toggle menu
    hamburger.addEventListener('click', function() {
        menu.classList.add('open');
    });

    close.addEventListener('click', function() {
        menu.classList.remove('open');
    });

    // Toggle dropdown
    directions.addEventListener('click', function() {
        dropdown.classList.toggle('open');
        arrow.style.transform = dropdown.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});