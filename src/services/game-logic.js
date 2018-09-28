import _ from 'lodash';
import {
  hands,
  beats,
  winIndexes
} from '../constants/game-constants';

const possibleHands = Object.values(hands);

const gameLogic = {
  wins: {
    draws: 0,
    player1: 0,
    player2: 0
  },

  choseCPUHand() {
    return _.sample(possibleHands);
  },

  gameResult(firstHand, secondHand) {
    const result = (firstHand === secondHand) ? 0 : (beats[firstHand] === secondHand) ? 1 : 2;
    gameLogic.wins[winIndexes[result]] += 1;
    return result;
  }
};

export default gameLogic;