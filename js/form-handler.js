import { isEscapeKey } from './util.js';
import { initializeValidation, submitForm } from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');
const imageUploadInput = document.querySelector('.img-upload__input');
const imageEditForm = document.querySelector('.img-upload__overlay');
const closeEditFormButton = document.querySelector('.img-upload__cancel');
const imageScale = document.querySelector('.scale__control--value');
const effectLevel = document.querySelector('.effect-level__value');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const effectButtons = document.querySelectorAll('.effects__radio');

imageUploadInput.addEventListener('change', () => {
  if (imageUploadInput.files.length > 0) {
    imageEditForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }
});

const resetFormFields = () => {
  imageUploadInput.value = '';
  imageScale.value = '100%';
  effectLevel.value = '';
  effectButtons.forEach((button) => {
    button.checked = button.id === 'effect-none';
  });
  hashtagsInput.value = '';
  descriptionInput.value = '';
};

const preventFormCloseOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const closeOverlay = () => {
  imageEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetFormFields();

  hashtagsInput.removeEventListener('keydown', preventFormCloseOnEsc);
  descriptionInput.removeEventListener('keydown', preventFormCloseOnEsc);
};

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeOverlay();
  }
};

const addEventListeners = () => {
  closeEditFormButton.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', onEscapeKeyDown);
  hashtagsInput.addEventListener('keydown', preventFormCloseOnEsc);
  descriptionInput.addEventListener('keydown', preventFormCloseOnEsc);
};

const pristine = initializeValidation(uploadForm, hashtagsInput, descriptionInput);
submitForm(uploadForm, pristine);

addEventListeners();
