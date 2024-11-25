import { isEscapeKey } from './util.js';
import { closeOverlay, setErrorMessageStatus } from './form-handler.js';

const successTemplate = document.querySelector('#success');
const errorTemplate = document.querySelector('#error');

const showSuccessMessage = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');

  const successMessage = successTemplate.content.cloneNode(true);
  const successSection = successMessage.querySelector('.success');
  const successButton = successMessage.querySelector('.success__button');
  document.body.appendChild(successMessage);

  successButton.addEventListener('click', () => {
    successSection.remove();
    closeOverlay();
  });

  const onEscapeKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      successSection.remove();
      closeOverlay();
    }
  };
  document.addEventListener('keydown', onEscapeKeyDown);

  successSection.addEventListener('click', (evt) => {
    if (evt.target === successSection) {
      successSection.remove();
      closeOverlay();
    }
  });
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.content.cloneNode(true);
  const errorSection = errorMessage.querySelector('.error');
  const errorButton = errorMessage.querySelector('.error__button');
  document.body.appendChild(errorMessage);
  setErrorMessageStatus(true);

  errorButton.addEventListener('click', () => {
    errorSection.remove();
    setErrorMessageStatus(false);
  });

  const onEscapeKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      errorSection.remove();
      setErrorMessageStatus(false);
    }
  };
  document.addEventListener('keydown', onEscapeKeyDown);

  errorSection.addEventListener('click', (evt) => {
    if (evt.target === errorSection) {
      errorSection.remove();
      setErrorMessageStatus(false);
    }
  });
};

export { showSuccessMessage, showErrorMessage };
