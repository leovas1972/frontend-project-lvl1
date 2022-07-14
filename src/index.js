import readlineSync from 'readline-sync';
import greetings from './cli.js'

const run = (taskGame,toGetData) => {
  const roundsCount = 3;
  const userName = greetings();
  console.log(taskGame);
  
  for(let i = 1; i <= roundsCount; i +=1){
    const[question, correctAnswer] = toGetData();
    console.log(`Question: ${question}`);
    const answerUser = String(readlineSync.question('Your answer:'));
    if(correctAnswer === answerUser){
      console.log('Correct!'); 
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${userName}!`);
        break;
    }

    if(i === roundsCount){
      console.log(`Congratulations, ${userName}!`); 
    }   
  }
}

export default run;