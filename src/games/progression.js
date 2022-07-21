import { getRandomInt, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';
const minLength = 10;
const minRange = 1;
const maxRange = 70;
const minStep = 1;
const maxStep = 9;

const creatProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInt(minRange, maxRange);
  const step = getRandomInt(minStep, maxStep);

  const progression = creatProgression(start, step, minLength);
  const hiddenIndex = getRandomIndex(progression);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
