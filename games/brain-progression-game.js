const rules = 'What number is missing in the progression?';

const gameLogic = () => {
  const progressionArr = [];
  const progressionStart = Math.floor(Math.random() * 11 + 2);
  const progressionLength = Math.floor(Math.random() * 6 + 5);
  const progressionStep = Math.floor(Math.random() * 4 + 2);

  let j = progressionStart;
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArr.push(j);
    j += progressionStep;
  }

  const randomProgressionIndex = Math.floor(Math.random() * progressionLength);
  const rightNumber = progressionArr[randomProgressionIndex];
  progressionArr[randomProgressionIndex] = '..';

  const progression = progressionArr.join(' ');
  const question = `Question: ${progression}`;

  const rightAnswer = rightNumber.toString();
  const result = [rightAnswer, question];
  return result;
};

export { rules, gameLogic };
