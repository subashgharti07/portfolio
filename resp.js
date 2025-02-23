burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
left = document.querySelector('.left');
navlist = document.querySelector('.navlist');

burger.addEventListener('click', () => {
    navbar.classList.toggle('v-list-resp');  // Corrected classList
    left.classList.toggle('v-list-resp');    // Corrected classList
    navlist.classList.toggle('h-nav-resp');  // Corrected classList
});