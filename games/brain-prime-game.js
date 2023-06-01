const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const numIsPrimeOrNot = (num) => {
    const temp = (num ** (1 / 2));
    const divider = Math.trunc(temp);

    for (let i = 2; i <= divider; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const number = Math.floor(Math.random() * 35 + 3);
  const rightAnswer = numIsPrimeOrNot(number);
  const question = `Question: ${number}`;

  const result = [rightAnswer, question];
  return result;
};

export { rules, gameLogic };
