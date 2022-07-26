import { getRandomInt, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
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
  const operator = operations[getRandomIndex(operations)];
  const correctAnswer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
