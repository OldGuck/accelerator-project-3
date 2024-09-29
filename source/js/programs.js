import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const programsList = document.querySelector('.programs__list');
const programsItems = document.querySelectorAll('.programs__item');

const desktop = window.matchMedia('(min-width: 1440px)');

const newItems = [];

if (desktop.matches) {
  programsItems.forEach((item) => {
    const newItem = item.cloneNode(true);
    newItems.push(newItem);
  });

  newItems.forEach((item) => {
    programsList.appendChild(item);
  });
}

new Swiper('.programs__swiper-wrapper', {
  modules: [ Navigation, Scrollbar ],

  navigation: {
    prevEl: '.programs__slider-button--prev',
    nextEl: '.programs__slider-button--next'
  },

  scrollbar: {
    el: '.programs__scrollbar',
    draggable: true,
  },

  simulateTouch: false,
  touchRatio: 0.5,

  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});
