import { getRandomInt } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 70;

const gcd = (a, b) => ((a === b || b === 0) ? a : gcd(b, a % b));

const generateRound = () => {
  const number1 = getRandomInt(minRange, maxRange);
  const number2 = getRandomInt(minRange, maxRange);

  const answer = String(gcd(number1, number2));
  const question = `${number1} ${number2}`;

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
