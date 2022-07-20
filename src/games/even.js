import { getRandomInt } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 50;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(minRange, maxRange);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runEven = () => {
  run(description, generateRound);
};

export default runEven;
