import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import greetings from './cli.js';

const even = () => {
  const userName = greetings();
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

    if(i === 2){
      console.log(`Congratulations, ${userName}!`); 
    }   
  } 
}

export default even;