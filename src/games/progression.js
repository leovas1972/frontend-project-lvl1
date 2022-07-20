import { getRandomInt, indexSelection } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 70;
const minStep = 1;
const maxStep = 9;

const createProgression = (startNumber, step, lengthOfProgression) => {
  const result = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    const num = startNumber + step * i;
    result.push(num);
  }
  return result;
};

const generateRound = () => {
  const lengthOfProgression = 10;
  const startNumber = getRandomInt(minRange, maxRange);
  const step = getRandomInt(minStep, maxStep);

  const resultingProgression = createProgression(startNumber, step, lengthOfProgression);
  const hiddenIndex = resultingProgression.indexOf(indexSelection(resultingProgression));
  const answer = String(resultingProgression[hiddenIndex]);
  resultingProgression[hiddenIndex] = '..';
  const question = resultingProgression.join(' ');

  return [question, answer];
};

const runProgression = () => {
  run(description, generateRound);
};

export default runProgression;
