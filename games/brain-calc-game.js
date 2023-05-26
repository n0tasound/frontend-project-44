import readlineSync from 'readline-sync';
import playGame from '../src/index.js';

const rules = 'What is the result of the expression?';

const gameLogic = () => {
  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomNum = Math.floor(Math.random() * 3);
    return operators[randomNum];
  };

  const randomNum1 = Math.floor(Math.random() * 50 + 1);
  const randomNum2 = Math.floor(Math.random() * 10 + 1);
  const randomOperator = getRandomOperator();

  const question = `Question: ${randomNum1} ${randomOperator} ${randomNum2}`;

  let rightNumber;
  if (randomOperator === '+') {
    rightNumber = randomNum1 + randomNum2;
  } else if (randomOperator === '-') {
    rightNumber = randomNum1 - randomNum2;
  } else if (randomOperator === '*') {
    rightNumber = randomNum1 * randomNum2;
  }

  const rightAnswer = rightNumber.toString();

  const result = [rightAnswer, question];
  return result;
};

export { rules, gameLogic };
