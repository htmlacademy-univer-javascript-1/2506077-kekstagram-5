export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export const getUniqueRandomInteger = (a, b, valuesArray) => {
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
