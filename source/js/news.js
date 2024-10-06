import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/grid';

const mobile = window.matchMedia('(max-width: 767px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
const desktop = window.matchMedia('(min-width: 1440px)');

const newsList = document.querySelector('.news__list');
const newsItems = document.querySelectorAll('.news__item');
const newItems = [];

let prevIndex = 0;

const renderPagination = (index, className) => `<button class="${className}" type="button">${index + 1}</button>`;

const copyList = (copyNumber) => {
  const list = document.querySelector('.news__list');
  const items = document.querySelectorAll('.news__item');

  for (let i = 1; i <= copyNumber; i++) {
    items.forEach((item) => {
      const newItem = item.cloneNode(true);
      newItems.push(newItem);
    });

    newItems.forEach((item) => {
      list.appendChild(item);
    });
  }
};

if (mobile.matches) {
  for (let i = 0; i < newsItems.length; i++) {
    if (i % 2 === 0) {
      newsItems[i].classList.add('news__item--current');
    }
  }

  copyList(1);
}

if (tablet.matches) {
  const elements = [... newsItems];
  elements[1] = elements.splice(2, 1, elements[1])[0];

  elements.forEach((element) => {
    newsList.appendChild(element);
  });

  copyList(3);
}

if (desktop.matches) {
  copyList(1);

  const item = document.querySelector('.news__item');
  item.classList.add('news__item--current');
}

const swiper = new Swiper('.news__swiper-wrapper', {
  pagination: {
    el: '.news__pagination',
    bulletClass: 'news__pagination-button',
    bulletActiveClass: 'news__pagination-button--current',
    renderBullet: renderPagination,
    clickable: true,
  },

  navigation: {
    prevEl: '.news__slider-button--prev',
    nextEl: '.news__slider-button--next',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  grid: {
    rows: 2,
  },

  on: {
    init: () => {
      const pages = document.querySelectorAll('.news__pagination-button');

      for (let i = 0; i < pages.length; i++) {
        if (i > 3) {
          pages[i].style.display = 'none';
        }
      }
    },

    slideChange: () => {
      const activeIndex = swiper.realIndex;
      const items = document.querySelectorAll('.news__item');
      items[prevIndex].classList.remove('news__item--current');
      items[activeIndex].classList.add('news__item--current');

      const pages = document.querySelectorAll('.news__pagination-button');

      if (mobile.matches) {
        if (activeIndex > 2 && activeIndex <= pages.length - 2) {
          if (activeIndex > prevIndex) {
            pages[activeIndex - 3].style.display = 'none';
            pages[activeIndex + 1].style.display = 'flex';
          }
        }

        if (activeIndex > 0 && activeIndex <= pages.length - 4) {
          if (prevIndex > activeIndex) {
            pages[activeIndex + 3].style.display = 'none';
            pages[activeIndex - 1].style.display = 'flex';
          }
        }
      }

      if (tablet.matches || desktop.matches) {
        const pageButton = document.querySelector('.news__pagination-button--current');
        const index = Number(pageButton.textContent);

        if (index > 3 && index <= pages.length - 1) {
          if (activeIndex > prevIndex) {
            pages[index - 4].style.display = 'none';
            pages[index + 0].style.display = 'flex';
          }
        }

        if (index > 1 && index <= pages.length - 3) {
          if (prevIndex > activeIndex) {
            pages[index + 2].style.display = 'none';
            pages[index - 2].style.display = 'flex';
          }
        }
      }

      prevIndex = activeIndex;
    }
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,

      grid: {
        rows: 2,
      },

      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,

      grid: {
        rows: 1,
      },

      slidesPerGroup: 1,
    }
  }
});
