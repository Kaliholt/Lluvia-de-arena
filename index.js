const menuIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__menu');
const shadow = document.querySelector('.shadow');

menuIcon.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        shadow.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        shadow.classList.remove('hidden');
    }
}
