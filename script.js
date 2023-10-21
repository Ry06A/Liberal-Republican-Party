const menuButton = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});
