const NAMES = [
  'Игорь',
  'Артем',
  'Кирилл',
  'Соня',
  'Саша',
  'Иван',
  'Андрей',
  'Вероника',
  'Анастасия',
  'Алина',
  'Марина',
  'Маша',
  'Петр',
  'Станислав',
  'Гриша'
];

const PHOTOS_DESCRIPTION = [
  'Игра в футбол на улице',
  'Закат на море',
  'Утренний кофе',
  'Дружеские посиделки',
  'Летний пикник',
  'Уютный домашний интерьер',
  'Горный пейзаж',
  'Цветок во дворе',
  'Цветущие яблони в саду',
  'Пеший поход по лесу'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTO_OBJECTS_COUNT = 25;

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

const getRandomCommentMessage = () => {
  if (getRandomInteger(1, 2) === 2) {
    return `${getRandomArrayElement(COMMENTS)} ${getRandomArrayElement(COMMENTS)}`;
  }
  return getRandomArrayElement(COMMENTS);
};

const generateRandomComment = () => {
  const uniqueIdArray = [];
  return {
    id: getUniqueRandomInteger(1, 1000, uniqueIdArray),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomCommentMessage(),
    name: getRandomArrayElement(NAMES)
  };
};

const generatePhotoObject = () => {
  const uniqueIdArray = [];
  const uniqueUrlArray = [];
  return {
    id: getUniqueRandomInteger(1, 25, uniqueIdArray),
    url: `photos/${getUniqueRandomInteger(1, 25, uniqueUrlArray)}.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, generateRandomComment)
  };
};

const photosArray = Array.from({length: PHOTO_OBJECTS_COUNT}, generatePhotoObject);
