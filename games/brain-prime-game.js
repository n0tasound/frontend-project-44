import getRandomNum from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNotPrime = (num, divider) => num % divider === 0;

const isPrime = (num) => {
  const temp = (num ** (1 / 2));
  const divider = Math.trunc(temp);

  for (let i = 2; i <= divider; i += 1) {
    if (isNotPrime(num, i)) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNum(3, 35);
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  const result = [question, rightAnswer];
  return result;
};

const runGame = () => {
  gameStart(description, getQuestionAndAnswer);
};

export default runGame;
