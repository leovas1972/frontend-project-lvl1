import {getRandomInt} from '../utils.js';
import run from '../index.js'

const description ='What is the result of the expression?';
const operations = ['+', '-', '*'];
const functions = (number1, number2, operation) => {
  if(operation === '+'){
    return number1 + number2;
  } else if (operation === '-'){
    return number1 - number2;
  } else {
    return number1 * number2;
  }
};

const generateRound = () =>{
  const number1 = getRandomInt(1,15);
  const number2 = getRandomInt(1,20);
  const operation = operations[getRandomInt(0,operations.length - 1)];
  const correctAnswer = String(functions(number1,number2, operation));
  const question = `Question: ${number1} ${operation} ${number2}`;
  return [question, correctAnswer]; 
}

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;