const navigationItems = document.querySelectorAll('.header__item');
const buttonLinks = document.querySelectorAll('.header__button-link');

const navigationButton = document.querySelector('.header__button');
const buttonHiddenText = document.querySelector('.header__button-text-hidden');

const navigationMenu = document.querySelector('.header__list');

const subLists = document.querySelectorAll('.header__list-sub');
const subButtons = document.querySelectorAll('.header__button-link');

const hiddenText = {
  OPEN_TEXT:  'Открыть меню.',
  CLOSE_TEXT: 'Закрыть меню.',
};

const manageNavigation = () => {
  navigationButton.classList.toggle('header__button--opened');
  navigationMenu.classList.toggle('header__list--opened');

  document.body.classList.remove('page__body--overflow');
  buttonHiddenText.textContent = hiddenText.OPEN_TEXT;

  subLists.forEach((list) => {
    list.classList.remove('header__list-sub--opened');
  });

  subButtons.forEach((button) => {
    button.classList.remove('header__button-link--current');
  });
};

navigationButton.addEventListener('click', () => {
  manageNavigation();

  if (navigationButton.classList.contains('header__button--opened')) {
    document.body.classList.add('page__body--overflow');
    buttonHiddenText.textContent = hiddenText.CLOSE_TEXT;
  }
});

navigationItems.forEach((item) => {
  item.addEventListener('click', () => {
    manageNavigation();
  });
});

buttonLinks.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('header__button-link--current');

    const listSub = button.closest('.header__item-button').querySelector('.header__list-sub');
    listSub.classList.toggle('header__list-sub--opened');
  });
});

document.body.addEventListener('click', (evt) => {
  if (! evt.target.closest('.header__navigation')
    && navigationButton.classList.contains('header__button--opened')) {
    manageNavigation();
  }
});
