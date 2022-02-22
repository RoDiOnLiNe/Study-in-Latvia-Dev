import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

console.log('helo');


const menuLink = document.querySelectorAll('.menu__link[data-goto]');
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDeault();
        }
    }
}

document.getElementById('openNav').onclick = function () {
    document.getElementById('myNav').classList.add('open-menu');
    document.body.classList.add('lock');
};
document.getElementById('closeNav').onclick = function () {
    document.getElementById('myNav').classList.remove('open-menu');
    document.body.classList.remove('lock');
};

document.body.addEventListener('click', e => {
    if (!e.target.matches('button')) return;
    document.querySelector('.plan__img-box img').src = e.target.dataset.src;
  });




