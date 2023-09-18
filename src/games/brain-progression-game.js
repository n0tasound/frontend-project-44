import getRandomNum from '../helper.js';
import gameStart from '../index.js';

const description = 'What number is missing in the progression?';

const formProgression = () => {
  const progressionStart = getRandomNum(2, 12);
  const progressionLength = getRandomNum(5, 10);
  const progressionStep = getRandomNum(2, 5);

  const progressionArr = [];
  let j = progressionStart;
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArr.push(j);
    j += progressionStep;
  }
  return progressionArr;
};

const getQuestionAndAnswer = () => {
  const progression = formProgression();
  const lastIndex = progression.length - 1;

  const randomProgressionIndex = getRandomNum(0, lastIndex);
  const rightNumber = progression[randomProgressionIndex];
  progression[randomProgressionIndex] = '..';

  const progressionToShow = progression.join(' ');
  const question = `Question: ${progressionToShow}`;

  const rightAnswer = rightNumber.toString();
  const result = [question, rightAnswer];
  return result;
};

const runGame = () => {
  gameStart(description, getQuestionAndAnswer);
};

export default runGame;
