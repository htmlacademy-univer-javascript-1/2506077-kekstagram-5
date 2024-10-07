const defineStringLength = (string = '', length = 1) => (string.length <= length);

const findPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let hitCounter = 0;

  for (let i = 0; i < Math.ceil(string.length / 2); i++) {
    if (string[i] === string[string.length - 1 - i]) {
      hitCounter += 1;
    }
  }
  return (hitCounter === Math.ceil(string.length / 2));
};

const findNumbers = (string = '') => {
  string = string.toString().replaceAll(' ', '');
  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      numberString += string[i];
    }
  }
  return (numberString === '') ? NaN : Number(numberString);
};

defineStringLength();
findPalindrome();
findNumbers();
