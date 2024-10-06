const faqItems = document.querySelectorAll('.faq__item');

const buttonHiddenText = {
  OPEN_TEXT:  'Открыть ответ.',
  CLOSE_TEXT: 'Закрыть ответ.',
};

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('faq__item--opened');
    const hiddenText = item.querySelector('span');

    hiddenText.textContent = buttonHiddenText.OPEN_TEXT;
    if (item.classList.contains('faq__item--opened')) {
      hiddenText.textContent = buttonHiddenText.CLOSE_TEXT;
    }
  });
});
