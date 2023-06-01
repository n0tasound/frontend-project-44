import readlineSync from 'readline-sync';

export default (rules, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, question] = gameLogic();

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
