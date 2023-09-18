import getRandomNum from '../helper.js';
import gameStart from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomNum = getRandomNum(0, 2);
  return operators[randomNum];
};

const calculate = (symbol, randomVal1, randomVal2) => {
  let result;
  if (symbol === '+') {
    result = randomVal1 + randomVal2;
  } else if (symbol === '-') {
    result = randomVal1 - randomVal2;
  } else if (symbol === '*') {
    result = randomVal1 * randomVal2;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNum(15, 35);
  const randomNum2 = getRandomNum(3, 14);

  const randomOperator = getRandomOperator();

  const question = `Question: ${randomNum1} ${randomOperator} ${randomNum2}`;

  const rightNumber = calculate(randomOperator, randomNum1, randomNum2);
  const rightAnswer = rightNumber.toString();

  const result = [question, rightAnswer];
  return result;
};

const runGame = () => {
  gameStart(description, getQuestionAndAnswer);
};

export default runGame;
