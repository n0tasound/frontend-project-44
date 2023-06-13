import readlineSync from 'readline-sync';

const gameStart = (rules, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = gameLogic();

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default gameStart;
