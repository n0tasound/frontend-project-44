const rules = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const randomNum1 = Math.floor(Math.random() * 100 + 1);
  const randomNum2 = Math.floor(Math.random() * 50 + 1);

  const question = `Question: ${randomNum1} ${randomNum2}`;

  const lowestNum = Math.min(randomNum1, randomNum2);
  let rightNumber = 1;

  for (let i = 2; i <= lowestNum; i += 1) {
    if (randomNum1 % i === 0 && randomNum2 % i === 0) {
      rightNumber = i;
    }
  }

  const rightAnswer = rightNumber.toString();

  const result = [rightAnswer, question];
  return result;
};

export { rules, gameLogic };
