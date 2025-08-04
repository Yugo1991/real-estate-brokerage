function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('show');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}