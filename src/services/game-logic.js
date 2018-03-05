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
      return 'It\'s a Draw!'
    } else if (beats[firstHand] === secondHand) {
      return 'You win!'
    } else {
      return 'The CPU wins!'
    }
  }
};

export default gameLogic;