const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav-ul');
const navClose = document.querySelector('.toggle1');

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle('nav-menu_visible');
  navClose.classList.toggle('nav-menu_visible');
});

navClose.addEventListener("click", () => {
    navMenu.classList.toggle('nav-menu_visible');
    navClose.classList.toggle('nav-menu_visible');
  });