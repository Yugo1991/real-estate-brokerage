function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  const hamburger = document.querySelector('.hamburger');

  menu.classList.toggle('show');
  hamburger.style.display = menu.classList.contains('show') ? 'none' : 'block';
}
