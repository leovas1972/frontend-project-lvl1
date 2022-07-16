import { getRandomInt } from '../utils.js';
import run from '../index.js';

const description = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(1, 100);

  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return [question, answer];
};

const runPrime = () => {
  run(description, generateRound);
};

export default runPrime;
