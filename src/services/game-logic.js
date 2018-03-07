import _ from 'lodash';

const beats = {
  Rock: 'Scissors',
  Scissors: 'Paper',
  Paper: 'Rock'
}

const gameLogic = {
  choseCPUHand() {
    return _.sample(['Rock', 'Paper', 'Scissors']); 
  },

  gameResult(firstHand, secondHand) {
    if (firstHand === secondHand) {
      return 0;
    }

    return (beats[firstHand] === secondHand) ? 1 : 2;
  }
};

export default gameLogic;