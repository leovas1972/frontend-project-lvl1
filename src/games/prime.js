import { getRandomInt } from '../utils.js';
import run from '../index.js';

const description = '"yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isPrime = (n) => {
  const max = Math.sqrt(n);

  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= max; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(minRange, maxRange);

  const answer = isPrime(number) ? 'yes' : 'no';
  const question = number;

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
