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


  const menuBtn = document.getElementById("floatingMenu");

  let isDragging = false;
  let offsetX, offsetY;

  menuBtn.addEventListener("mousedown", startDrag);
  menuBtn.addEventListener("touchstart", startDrag);

  function startDrag(e) {
    isDragging = true;
    menuBtn.style.cursor = "grabbing";

    const event = e.touches ? e.touches[0] : e;
    const rect = menuBtn.getBoundingClientRect();

    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }

  function drag(e) {
    if (!isDragging) return;

    const event = e.touches ? e.touches[0] : e;

    menuBtn.style.left = event.clientX - offsetX + "px";
    menuBtn.style.top = event.clientY - offsetY + "px";
    menuBtn.style.right = "auto";
    menuBtn.style.bottom = "auto";
  }

  function stopDrag() {
    isDragging = false;
    menuBtn.style.cursor = "grab";

    document.removeEventListener("mousemove", drag);
    document.removeEventListener("touchmove", drag);
  }

