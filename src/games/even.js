import { getRandomInt } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 50;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(minRange, maxRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
