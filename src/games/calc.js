import { getRandomInt, indexSelection } from '../utils.js';
import run from '../index.js'

const description ='What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2; 
    default:
      return null;
  } 
};

const generateRound = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const operation = indexSelection(operations);

  const answer = String(calculate(number1, number2, operation));
  const question = `${number1} ${operation} ${number2}`;

  return [question, answer]; 
}

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;