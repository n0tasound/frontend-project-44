import readlineSync from 'readline-sync';

export default (rules, gameLogic) => {
  // Приветствие пользователя
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // ////////////////////////////////
  // Правила игры
  console.log(rules);
  // ////////////////////////////////
  // Цикл
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, question] = gameLogic();

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    // ////////////////////////////////
    // Сравнение ответов:
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    // /////////////////////////
    // Конец игры
  }

  return console.log(`Congratulations, ${name}!`);
};
