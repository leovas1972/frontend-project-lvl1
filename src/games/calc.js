import { getRandomInt, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const index = getRandomIndex(operations);
const minRange = 1;
const maxRange = 50;

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateRound = () => {
  const number1 = getRandomInt(minRange, maxRange);
  const number2 = getRandomInt(minRange, maxRange);
  const correctAnswer = String(calculate(number1, number2, operations[index]));
  const question = `${number1} ${operations[index]} ${number2}`;

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
