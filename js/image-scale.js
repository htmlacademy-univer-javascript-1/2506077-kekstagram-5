const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const imageEditForm = document.querySelector('.img-upload__overlay');
const smallerButton = imageEditForm.querySelector('.scale__control--smaller');
const biggerButton = imageEditForm.querySelector('.scale__control--bigger');
const scaleValueInput = imageEditForm.querySelector('.scale__control--value');
const imagePreview = imageEditForm.querySelector('.img-upload__preview img');
let scaleValue = MAX_SCALE;

const updateScale = () => {
  scaleValueInput.value = `${scaleValue}%`;
  imagePreview.style.transform = `scale(${scaleValue / 100})`;
};

const resetScale = () => {
  scaleValue = MAX_SCALE;
  updateScale();
};

const changeScale = (delta) => {
  const newScale = scaleValue + delta;
  if (newScale >= MIN_SCALE && newScale <= MAX_SCALE) {
    scaleValue = newScale;
    updateScale();
  }
};

smallerButton.addEventListener('click', () => changeScale(-SCALE_STEP));
biggerButton.addEventListener('click', () => changeScale(SCALE_STEP));

export { resetScale };
