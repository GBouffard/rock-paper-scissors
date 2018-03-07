import _ from 'lodash';
import {
  hands,
  beats
} from '../constants/game-constants';

const possibleHands = Object.values(hands);

const gameLogic = {
  choseCPUHand() {
    return _.sample(possibleHands);
  },

  gameResult(firstHand, secondHand) {
    if (firstHand === secondHand) {
      return 0;
    }
    return (beats[firstHand] === secondHand) ? 1 : 2;
  }
};

export default gameLogic;