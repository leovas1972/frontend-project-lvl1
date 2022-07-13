import getRandomInt from '../utils/getRandomInt.js'
import runGames from '../index.js'

const taskGame ='Find the greatest common divisor of given numbers.';
function NOD () {
  for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    var y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

const toGetData = () => {
  const number1 = getRandomInt(1,20);
  const number2 = getRandomInt(1,61);
  const correctAnswer = String(NOD(number1, number2));
  const question = `Question: ${number1} ${number2}`;
  return [question, correctAnswer];
}

const runGcdGame = () => {
  runGames(taskGame, toGetData);
};

export default runGcdGame;