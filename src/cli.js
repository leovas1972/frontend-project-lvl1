import readlineSync from 'readline-sync';

const question = (str, el) => {
  const userName = readlineSync.question(str);
  return console.log(`${el} ${userName}!`);
};

export default question;
