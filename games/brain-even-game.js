import getRandomNum from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const randomNum = getRandomNum(2, 99);
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = `Question: ${randomNum}`;

  const result = [question, rightAnswer];
  return result;
};

const runGame = () => {
  gameStart(description, getQuestionAndAnswer);
};

export default runGame;
