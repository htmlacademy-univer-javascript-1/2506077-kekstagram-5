import { showSuccessMessage, showErrorMessage } from './messages.js';

const submitForm = (form, pristine) => {
  const submitButton = document.querySelector('.img-upload__submit');

  form.addEventListener('input', () => {
    submitButton.disabled = !pristine.validate();
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(form);
    submitButton.disabled = true;
    fetch('https://29.javascript.htmlacademy.pro/kekstagram', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error(`${response.status}`);
      })
      .then((response) => response.json())
      .then(() => showSuccessMessage())
      .catch(() => showErrorMessage())
      .finally(() => {
        submitButton.disabled = false;
      });
  });
};

export { submitForm };
