import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const createCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const fillComments = (comments) => {
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsList.appendChild(commentElement);
  });
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  fillComments(picture.comments);

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const addEventListeners = () => {
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscapeKeyDown);
};

addEventListeners();

export { openBigPicture };
