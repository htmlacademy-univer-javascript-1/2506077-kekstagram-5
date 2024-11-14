const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getUniqueRandomInteger = (a, b, valuesArray) => {
  let randomNumber = getRandomInteger(a, b);
  while (valuesArray.includes(randomNumber)) {
    randomNumber = getRandomInteger(a, b);
    if (valuesArray.length >= (b - a + 1)) {
      throw new Error(`Уникальных значиний в диапазоне от ${a} до ${b} больше нет!`);
    }
  }
  valuesArray.push(randomNumber);
  return randomNumber;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const validateHashtagsCount = (value) => {
  const hashtags = value.trim().toLowerCase().split(' ');
  return hashtags.length <= 5;
};

const validateHashtagsUnique = (value) => {
  const hashtags = value.trim().toLowerCase().split(' ');
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
};

const validateHashtagsPattern = (value) => {
  const hashtags = value.trim().toLowerCase().split(' ');
  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/;
  return !value || hashtags.every((hashtag) => hashtagPattern.test(hashtag));
};

const validateDescriptionLength = (value) => !value || value.length <= 140;

export {
  getRandomInteger,
  getRandomArrayElement,
  getUniqueRandomInteger,
  isEscapeKey,
  validateHashtagsCount,
  validateHashtagsUnique,
  validateHashtagsPattern,
  validateDescriptionLength
};
