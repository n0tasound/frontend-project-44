import getRandomNum from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstRandomNum, secondRandomNum, lowestNum) => {
  let rightNumber = 1;

  for (let i = 2; i <= lowestNum; i += 1) {
    if (firstRandomNum % i === 0 && secondRandomNum % i === 0) {
      rightNumber = i;
    }
  }
  return rightNumber;
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 50);

  const question = `Question: ${randomNum1} ${randomNum2}`;

  const lowestNum = Math.min(randomNum1, randomNum2);

  const rightNumber = getGcd(randomNum1, randomNum2, lowestNum);
  const rightAnswer = rightNumber.toString();

  const result = [question, rightAnswer];
  return result;
};

const runGame = () => {
  gameStart(description, getQuestionAndAnswer);
};

export default runGame;
