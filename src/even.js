import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`'Hello' ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  const numOfQuestion = 3;
  for (let i = 0; i < numOfQuestion; i +=1){
    let random = getRandomInt(1,21);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer:');
    const answerToLoverCase = answer.toLowerCase();
    const yes = answerToLoverCase.includes('yes');
    const no = answerToLoverCase.includes('no');
    if((random%2 === 0 && yes) || (random%2 !==0 && no)){
      console.log('Correct!');  
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
      Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }  
}

export default even;