const initSelectField = (blockClassName, openedClassName) => {
  const selectField = document.querySelector(`.${blockClassName}__select`);
  const selectFieldText = document.querySelector(`.${blockClassName}__select-text`);
  const optionsList = document.querySelector(`.${blockClassName}__options-list`);
  const options = document.querySelectorAll(`.${blockClassName}__option`);
  const inputSelect = document.querySelector(`.${blockClassName}__input-select`);

  const closeOptionsList = (evt) => {
    if (! (evt.target.classList.contains(`${blockClassName}__option`)
      || evt.target.classList.contains(`${blockClassName}__select`)
    || evt.target.classList.contains(`${blockClassName}__select-text`))) {
      optionsList.classList.remove(openedClassName);
      document.removeEventListener('click', closeOptionsList);
    }
  };

  selectField.addEventListener('click', () => {
    optionsList.classList.toggle(openedClassName);

    if (optionsList.classList.contains(openedClassName)) {
      document.addEventListener('click', closeOptionsList);
    }
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((element) => {
        element.classList.remove('form-object__option--selected');
      });

      selectFieldText.textContent = option.textContent;
      inputSelect.value = option.textContent;
      option.classList.add('form-object__option--selected');
      optionsList.classList.toggle(openedClassName);

      if (inputSelect.value !== '') {
        selectField.classList.remove('form-object__select--error');
      }

      document.removeEventListener('click', closeOptionsList);
    });
  });
};

export { initSelectField };
