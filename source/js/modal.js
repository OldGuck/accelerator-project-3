import { initSelectField } from './select';

const openButton = document.querySelector('.about__button');

const modalTemplate = document.querySelector('#modal').content.querySelector('.modal');
const modalContainer = document.body;

openButton.addEventListener('click', () => {
  const modal = modalTemplate.cloneNode(true);
  modalContainer.appendChild(modal);

  initSelectField('modal', 'form-object__options-list--opened-light');

  const form = document.querySelector('.modal__main-wrapper');
  const overflow = document.querySelector('.modal');
  const nameInput = document.querySelector('.modal__input--name');
  const phoneInput = document.querySelector('.modal__input--phone');
  const selectInput = form.querySelector('.modal__input-select');
  const selectField = form.querySelector('.modal__select');
  const checkboxInput = form.querySelector('.modal__input-checkbox');
  const submitButton = document.querySelector('.modal__button');
  const closeButton = document.querySelector('.modal__button-close');

  const phoneExpression = new RegExp(/^\+?[7][0-9]{7,14}$/);

  const setInputsListener = (input, errorField, errorClass) => input.addEventListener('change', () => errorField.classList.remove(errorClass));

  const validateInput = (input, errorField, errorClass) => {
    if (! input.validity.valid) {
      errorField.classList.add(errorClass);
      return false;
    }

    errorField.classList.remove(errorClass);
    return true;
  };

  submitButton.addEventListener('click', () => {
    const nameIsValid = validateInput(nameInput, nameInput, 'form-object__input--error');
    let phoneIsValid = validateInput(phoneInput, phoneInput, 'form-object__input--error');
    phoneIsValid = phoneExpression.test(phoneInput.value);

    if (! phoneIsValid) {
      phoneInput.value = '';
      phoneIsValid = validateInput(phoneInput, phoneInput, 'form-object__input--error');
      phoneIsValid = phoneExpression.test(phoneInput.value);
    }

    const selectIsValid = validateInput(selectInput, selectField, 'form-object__select--error');
    const checkboxIsValid = validateInput(checkboxInput, checkboxInput, 'form-object__input-checkbox--error');

    if (nameIsValid && phoneIsValid && selectIsValid && checkboxIsValid) {
      form.submit();
    }
  });

  setInputsListener(nameInput, nameInput, 'form-object__input--error');
  setInputsListener(phoneInput, phoneInput, 'form-object__input--error');
  setInputsListener(checkboxInput, checkboxInput, 'form-object__input-checkbox--error');

  closeButton.addEventListener('click', () => {
    modal.remove();
  });

  overflow.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal')) {
      modal.remove();
    }
  });
});
