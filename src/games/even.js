import {getRandomInt} from '../utils.js';
import run from '../index.js'

const taskGame ='Answer "yes" if the number is even, otherwise answer "no".';

const toGetData = () => {
  let number = getRandomInt(1,21);
  console.log(`Question: ${number}`);
  const question = `Question: ${number}`
  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runEven = () => {
  run(taskGame, toGetData);
};

export default runEven;