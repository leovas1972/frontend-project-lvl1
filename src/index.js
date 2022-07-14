import readlineSync from 'readline-sync';

const run = (description,generateRound) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}!`);
  console.log(description);
  
  for(let i = 1; i <= roundsCount; i +=1){
    const[question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if(correctAnswer !== userAnswer){
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}!`);
      return; 
    }
    console.log('Correct!');  
  }
}

export default run;