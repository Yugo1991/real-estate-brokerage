function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  const hamburger = document.querySelector('.hamburger');

  menu.classList.toggle('show');
  hamburger.style.display = menu.classList.contains('show') ? 'none' : 'block';
}

const slides = document.querySelectorAll('.hero-slides .slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 5000); // change slide every 5 seconds