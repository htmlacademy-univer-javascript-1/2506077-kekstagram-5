import { isEscapeKey } from './util.js';

const COMMENTS_LOAD_STEP = 5;
const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const loadCommentsButton = bigPicture.querySelector('.comments-loader');
const сommentsCountData = bigPicture.querySelector('.social__comment-count');

let displayedCommentsCount = COMMENTS_LOAD_STEP;
let allComments = [];

const createCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const updateCommentsCountData = () => {
  сommentsCountData.innerHTML = `${displayedCommentsCount} из <span class="comments-count">${allComments.length}</span> комментариев`;
};

const renderComments = () => {
  commentsList.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();
  displayedCommentsCount = Math.min(displayedCommentsCount, allComments.length);
  const commentsToDisplay = allComments.slice(0, displayedCommentsCount);
  updateCommentsCountData();

  if (allComments.length <= COMMENTS_LOAD_STEP || displayedCommentsCount >= allComments.length) {
    loadCommentsButton.classList.add('hidden');
  } else {
    loadCommentsButton.classList.remove('hidden');
  }

  commentsToDisplay.forEach((comment) => {
    commentsFragment.appendChild(createCommentElement(comment));
  });
  commentsList.appendChild(commentsFragment);
};

const onLoadCommentsButtonClick = () => {
  displayedCommentsCount += COMMENTS_LOAD_STEP;
  renderComments();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  displayedCommentsCount = COMMENTS_LOAD_STEP;
  allComments = [];
};

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();

    document.removeEventListener('keydown', onEscapeKeyDown);
    loadCommentsButton.removeEventListener('click', onLoadCommentsButtonClick);
  }
};

const onCloseBigPictureClick = () => {
  closeBigPicture();

  document.removeEventListener('keydown', onEscapeKeyDown);
  loadCommentsButton.removeEventListener('click', onLoadCommentsButtonClick);
};

const addEventListeners = () => {
  loadCommentsButton.addEventListener('click', onLoadCommentsButtonClick);
  document.addEventListener('keydown', onEscapeKeyDown);
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  allComments = picture.comments.slice();

  renderComments();
  addEventListeners();

  document.body.classList.add('modal-open');
};

closeBigPictureButton.addEventListener('click', onCloseBigPictureClick);

export { openBigPicture };
