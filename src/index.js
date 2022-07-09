import readlineSync from 'readline-sync';
import greetings from './cli.js'

const runGames = (taskGame,toGetData) => {
  const numOfQuestion = 3;
  const userName = greetings();
  console.log(taskGame);
  
  for(let i = 1; i <= numOfQuestion; i +=1){
    const[question, correctAnswer] = toGetData();
    console.log(`Question: ${question}`);
    console.log(correctAnswer);
    const answerUser = Number(readlineSync.question('Your answer:'));
    if(correctAnswer === answerUser){
      console.log('Correct!'); 
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${userName}!`);
        break;
    }

    if(i === numOfQuestion){
      console.log(`Congratulations, ${userName}!`); 
    }   
  }
}

export default runGames;