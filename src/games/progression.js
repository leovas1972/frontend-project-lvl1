import {getRandomInt} from '../utils.js'
import run from '../index.js'

const description ='What number is missing in the progression?';
const progressionGeneration = (random,step) => {
  const result = [];
  for(let i = 0; i < 10; i += 1){
    let num = random + step * i;
    result.push(num);
  }
  return result;
}

const generateRound = () => {
  const random = getRandomInt(1,9);
  const step = getRandomInt(1,9);
  const arrayProgression = progressionGeneration(random,step);
  const index = getRandomInt(1,arrayProgression.length - 1);
  let answer = String(arrayProgression[index]);
  arrayProgression[index] = '..';
  const question = arrayProgression.join(' ');
  return [question, answer];
}

const runProgression = () => {
  run(description, generateRound);
};

export default runProgression;