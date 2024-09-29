import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const reviewsList = document.querySelector('.reviews__list');
const reviewsItems = document.querySelectorAll('.reviews__item');

const desktop = window.matchMedia('(min-width: 1440px)');

const newItems = [];

if (desktop.matches) {
  reviewsItems.forEach((item) => {
    const newItem = item.cloneNode(true);
    newItems.push(newItem);
  });

  newItems.forEach((item) => {
    reviewsList.appendChild(item);
  });
}

new Swiper('.reviews__swiper-wrapper', {
  modules: [ Navigation, Scrollbar ],

  navigation: {
    prevEl: '.reviews__slider-button--prev',
    nextEl: '.reviews__slider-button--next'
  },

  scrollbar: {
    el: '.reviews__scrollbar',
    draggable: true,
  },

  simulateTouch: false,
  touchRatio: 0.5,

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
});
