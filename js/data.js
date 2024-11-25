const showErrorMessage = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = `Ошибка: ${message}`;

  Object.assign(errorMessage.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '16px',
    backgroundColor: 'red',
    padding: '20px',
    borderRadius: '5px',
    zIndex: 999
  });

  document.body.appendChild(errorMessage);
};

const loadData = () =>
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status}`);
    })
    .then((response) => response.json())
    .catch((error) => showErrorMessage(error.message));

export { loadData };
