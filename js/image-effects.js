const imageEditForm = document.querySelector('.img-upload__overlay');
const imagePreview = imageEditForm.querySelector('.img-upload__preview img');
const effectLevelContainer = imageEditForm.querySelector('.img-upload__effect-level');
const effectLevelValue = effectLevelContainer.querySelector('.effect-level__value');

const resetEffect = () => {
  effectLevelContainer.style.display = 'none';
  imagePreview.style.filter = '';
  effectLevelValue.value = '';
};

const applyEffect = (effect, value) => {
  switch (effect) {
    case 'chrome':
      imagePreview.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      imagePreview.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      imagePreview.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      imagePreview.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      imagePreview.style.filter = `brightness(${value})`;
      break;
    default:
      resetEffect();
      break;
  }
};

export { resetEffect, applyEffect };
