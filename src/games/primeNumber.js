import getRandomInt from '../utils.js'
import runGames from '../index.js'

const taskGame ='"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) =>{
  for(let i =2, max=Math.sqrt(n); i <=max; i +=1){
    if(n%2===0){
    return false;
    }
  }
  return n > 1; 
};

const toGetData = () => {
  const number = getRandomInt(1,25);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGames(taskGame, toGetData);
};

export default runPrimeGame;