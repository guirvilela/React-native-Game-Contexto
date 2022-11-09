import {IWordType} from '../types/wordType';

export const nextTipDistance = (guessHistory: any[], words: IWordType[]) => {
  let tipDistance = 499;
  let lowestDistance = tipDistance;

  if (guessHistory.length > 0) {
    const distances = guessHistory[1];
    lowestDistance = Math.min(distances);
    if (lowestDistance > 1) {
      tipDistance = Math.floor(lowestDistance / 2);
    } else {
      const findEqualWords = words.find(
        objWord => objWord.distance === lowestDistance,
      );
      if (findEqualWords) {
        lowestDistance++;
      }
      tipDistance = lowestDistance;
      while (lowestDistance === tipDistance) {
        tipDistance = lowestDistance++;
      }
    }
  }

  return tipDistance;
};
