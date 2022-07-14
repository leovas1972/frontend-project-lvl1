import {getRandomInt} from '../utils.js';
import run from '../index.js'

const description ='Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  let number = getRandomInt(1,21);
  const question = `${number}`
  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runEven = () => {
  run(description, generateRound);
};

export default runEven;