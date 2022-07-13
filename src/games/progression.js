import getRandomInt from '../utils.js'
import runGames from '../index.js'

const taskGame ='What number is missing in the progression?';
const progressionGeneration = (random,step) => {
  const result = [];
  for(let i = 0; i < 10; i +=1){
    let num = random + step * i;
    result.push(num);
  }
  return result;
}

const toGetData = () => {
  const random = getRandomInt(1,9);
  const step = getRandomInt(1,9);
  const arrayProgression = progressionGeneration(random,step);
  const index = getRandomInt(1,arrayProgression.length - 1);
  let correctAnswer = String(arrayProgression[index]);
  arrayProgression[index] = '..';
  const question = arrayProgression.join(' ');
  return [question, correctAnswer];
}

const runProgressionGame = () => {
  runGames(taskGame, toGetData);
};

export default runProgressionGame;