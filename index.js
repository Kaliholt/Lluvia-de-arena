const menuIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__menu');
const shadowFull = document.querySelector('.shadow--full');

menuIcon.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        shadowFull.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        shadowFull.classList.remove('hidden');
    }
}
