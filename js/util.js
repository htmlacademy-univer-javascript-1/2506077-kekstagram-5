const MAX_HASHTAGS = 5;
const MAX_DESCRIPTION_LENGTH = 140;

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

const parseInput = (value) => value.trim().toLowerCase().split(/\s+/);

const validateHashtagsCount = (value) => {
  const hashtags = parseInput(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const validateHashtagsUnique = (value) => {
  const hashtags = parseInput(value);
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
};

const validateHashtagsPattern = (value) => {
  const hashtags = parseInput(value);
  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/;
  return !value || hashtags[0] === '' || hashtags.every((hashtag) => hashtagPattern.test(hashtag));
};

const validateDescriptionLength = (value) => !value || value.length <= MAX_DESCRIPTION_LENGTH;

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
