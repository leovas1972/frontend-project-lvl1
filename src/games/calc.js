import readlineSync from 'readline-sync';
import getRandomInt from '../utils/getRandomInt.js';
import greetings from '../cli.js';

const sum = (a,b) => a + b;
const minus = (a,b) => a - b;
const multiply = (a,b) => a * b;

const calc = () => {
  const userName = greetings();
  console.log('What is the result of the expression?');
  const operations = ['+', '-', '*'];
  const arrFunctions = [sum, minus, multiply];

  const numOfQuestion = 3;
  for (let i = 0; i < numOfQuestion; i +=1){
    const num1 = getRandomInt(1,10);
    const num2 = getRandomInt(1,10);
    console.log(`Question: ${num1} ${operations[i]} ${num2}`);
    const answer = arrFunctions[i](num1,num2);
    const answerUser = Number(readlineSync.question('Your answer:'));
    
    if(answer === answerUser){
      console.log('Correct!'); 
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}.
        Let's try again, ${userName}!`);
        break;
    }

    if(i === 2){
      console.log(`Congratulations, ${userName}!`); 
    }  
  }  
}

export default calc;