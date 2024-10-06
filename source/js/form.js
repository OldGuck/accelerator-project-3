const form = document.querySelector('.form__main-wrapper');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--phone');
const textareaInput = document.querySelector('.form__input--textarea');
const selectInput = form.querySelector('.form__input-select');
const selectField = form.querySelector('.form__select');
const checkboxInput = form.querySelector('.form__input-checkbox');
const submitButton = document.querySelector('.form__button');

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

  const textareaIsValid = validateInput(textareaInput, textareaInput, 'form-object__input--error');
  const selectIsValid = validateInput(selectInput, selectField, 'form-object__select--error');
  const checkboxIsValid = validateInput(checkboxInput, checkboxInput, 'form-object__input-checkbox--error');

  if (nameIsValid && phoneIsValid && textareaIsValid && selectIsValid && checkboxIsValid) {
    form.submit();
  }
});

setInputsListener(nameInput, nameInput, 'form-object__input--error');
setInputsListener(phoneInput, phoneInput, 'form-object__input--error');
setInputsListener(textareaInput, textareaInput, 'form-object__input--error');
setInputsListener(checkboxInput, checkboxInput, 'form-object__input-checkbox--error');
