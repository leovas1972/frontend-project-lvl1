import { getRandomInt } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === b || b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const number1 = getRandomInt(1, 70);
  const number2 = getRandomInt(1, 70);

  const answer = String(gcd(number1, number2));
  const question = `${number1} ${number2}`;

  return [question, answer];
};

const runGcd = () => {
  run(description, generateRound);
};

export default runGcd;
