import { validateHashtagsCount, validateHashtagsUnique, validateHashtagsPattern, validateDescriptionLength } from './util.js';

const initializeValidation = (form, hashtagsInput, descriptionInput) => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__error-text'
  });

  pristine.addValidator(
    hashtagsInput,
    validateHashtagsCount,
    'Максимальное количество хэш-тегов — 5'
  );
  pristine.addValidator(
    hashtagsInput,
    validateHashtagsUnique,
    'Хэш-теги не должны повторяться'
  );
  pristine.addValidator(
    hashtagsInput,
    validateHashtagsPattern,
    'Некорректный формат хэш-тега'
  );
  pristine.addValidator(
    descriptionInput,
    validateDescriptionLength,
    'Длина комментария не может превышать 140 символов'
  );

  return pristine;
};

const submitForm = (form, pristine) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!pristine.validate()) {
      return;
    }
    form.submit();
  });
};

export { initializeValidation, submitForm };
