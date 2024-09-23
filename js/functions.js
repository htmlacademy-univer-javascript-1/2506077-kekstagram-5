/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const defineStringLength = (string, length) => (string.length <= length);

// console.log(defineStringLength('проверяемая строка', 20));
// console.log(defineStringLength('проверяемая строка', 18));
// console.log(defineStringLength('проверяемая строка', 10));
// console.log();


const findPolynomial = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let hitCounter = 0;

  for (let i = 0; i < Math.ceil(string.length / 2); i++) {
    if (string[i] === string[string.length - 1 - i]) {
      hitCounter += 1;
    }
  }
  return (hitCounter === Math.ceil(string.length / 2));
};

// console.log(findPolynomial('топот'));
// console.log(findPolynomial('ДовОд'));
// console.log(findPolynomial('Кекс'));
// console.log(findPolynomial('Лёша на полке клопа нашёл '));
// console.log();


const findNumbers = (string) => {
  string = string.toString().replaceAll(' ', '');
  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      numberString += string[i];
    }
  }
  return (numberString === '') ? NaN : Number(numberString);
};

// console.log(findNumbers('2023 год'));
// console.log(findNumbers('ECMAScript 2022'));
// console.log(findNumbers('1 кефир, 0.5 батона'));
// console.log(findNumbers('агент 007'));
// console.log(findNumbers('а я томат'));
// console.log(findNumbers(2023));
// console.log(findNumbers(-1));
// console.log(findNumbers(1.5));
// console.log();
