import { getRandomInt, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 70;
const minStep = 1;
const maxStep = 9;

const createLength = (start, step, lengthOfProgression) => {
  const result = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    const num = start + step * i;
    result.push(num);
  }
  return result;
};

const generateRound = () => {
  const lengthOfProgression = 10;
  const start = getRandomInt(minRange, maxRange);
  const step = getRandomInt(minStep, maxStep);

  const progression = createLength(start, step, lengthOfProgression);
  const hiddenIndex = getRandomIndex(progression);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
