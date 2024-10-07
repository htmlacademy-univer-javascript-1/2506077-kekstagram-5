import {getRandomInteger, getRandomArrayElement, getUniqueRandomInteger} from './util.js';

const NAMES = [
  'Игорь', 'Артем', 'Кирилл', 'Соня', 'Саша', 'Иван', 'Андрей', 'Вероника',
  'Анастасия', 'Алина', 'Марина', 'Маша', 'Петр', 'Станислав', 'Гриша'
];

const PHOTOS_DESCRIPTION = [
  'Игра в футбол на улице', 'Закат на море', 'Утренний кофе',
  'Дружеские посиделки', 'Летний пикник', 'Уютный домашний интерьер',
  'Горный пейзаж', 'Цветок во дворе', 'Цветущие яблони в саду',
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

const PhotoId = {
  MIN: 1,
  MAX: 25
};

const Likes = {
  MIN: 15,
  MAX: 200
};

const CommentsCount = {
  MIN: 0,
  MAX: 30
};

const CommentId = {
  MIN: 1,
  MAX: 1000
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const MessageCount = {
  MIN: 1,
  MAX: 2
};

const getRandomCommentMessage = () => {
  if (getRandomInteger(MessageCount.MIN, MessageCount.MAX) === MessageCount.MAX) {
    return `${getRandomArrayElement(COMMENTS)} ${getRandomArrayElement(COMMENTS)}`;
  }
  return getRandomArrayElement(COMMENTS);
};

const generateRandomComment = () => {
  const uniqueIdArray = [];
  return {
    id: getUniqueRandomInteger(CommentId.MIN, CommentId.MAX, uniqueIdArray),
    avatar: `img/avatar-${getRandomInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
    message: getRandomCommentMessage(),
    name: getRandomArrayElement(NAMES)
  };
};

const generatePhotoObject = () => {
  const uniqueIdArray = [];
  const uniqueUrlArray = [];
  return {
    id: getUniqueRandomInteger(PhotoId.MIN, PhotoId.MAX, uniqueIdArray),
    url: `photos/${getUniqueRandomInteger(PhotoId.MIN, PhotoId.MAX, uniqueUrlArray)}.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTION),
    likes: getRandomInteger(Likes.MIN, Likes.MAX),
    comments: Array.from({length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX)}, generateRandomComment)
  };
};

const photosArray = () => Array.from({length: PHOTO_OBJECTS_COUNT}, generatePhotoObject);

export {photosArray};
