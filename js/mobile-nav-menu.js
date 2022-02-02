'use strict';

var navMain = document.querySelector('.main-nav');
var navBurger = document.querySelector('.main-nav__burger');

navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
