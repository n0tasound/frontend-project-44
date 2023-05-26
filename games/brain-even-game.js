const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  const randomNum = Math.floor(Math.random() * 101);
  const question = `Question: ${randomNum}`;

  let rightAnswer;
  if (randomNum % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  const result = [rightAnswer, question];
  return result;
};

export { rules, gameLogic };
