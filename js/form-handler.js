import { isEscapeKey } from './util.js';
import { initializeValidation } from './validation.js';
import { submitForm } from './form-submit.js';
import { resetScale } from './image-scale.js';
import { resetEffect } from './image-effects.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const uploadForm = document.querySelector('.img-upload__form');
const imageUploadInput = uploadForm.querySelector('.img-upload__input');
const imageEditForm = uploadForm.querySelector('.img-upload__overlay');
const closeEditFormButton = imageEditForm.querySelector('.img-upload__cancel');
const imageScale = imageEditForm.querySelector('.scale__control--value');
const effectLevel = imageEditForm.querySelector('.effect-level__value');
const hashtagsInput = imageEditForm.querySelector('.text__hashtags');
const descriptionInput = imageEditForm.querySelector('.text__description');
const effectButtons = imageEditForm.querySelectorAll('.effects__radio');
const previewImage = imageEditForm.querySelector('.img-upload__preview img');
const previewElements = imageEditForm.querySelectorAll('.effects__preview');

let isErrorMessageOpen = false;

const pristine = initializeValidation(uploadForm, hashtagsInput, descriptionInput);
submitForm(uploadForm, pristine);

imageUploadInput.addEventListener('change', () => {
  if (imageUploadInput.files.length > 0) {
    pristine.reset();
    const file = imageUploadInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const imgUrl = URL.createObjectURL(file);
      previewImage.src = imgUrl;
      previewElements.forEach((element) => {
        element.style.backgroundImage = `url(${imgUrl})`;
      });
      imageEditForm.classList.remove('hidden');
      document.body.classList.add('modal-open');
    }
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

const closeOverlay = () => {
  imageEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetFormFields();
  pristine.reset();
  resetScale();
  resetEffect();

  closeEditFormButton.removeEventListener('click', closeOverlay);
};

const isInputFieldFocused = (evt) => evt.target === hashtagsInput || evt.target === descriptionInput;

const setErrorMessageStatus = (status) => {
  isErrorMessageOpen = status;
};

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt) && !isInputFieldFocused(evt) && !isErrorMessageOpen) {
    closeOverlay();
  }
};

const addEventListeners = () => {
  closeEditFormButton.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', onEscapeKeyDown);
};

addEventListeners();

export { closeOverlay, setErrorMessageStatus };
