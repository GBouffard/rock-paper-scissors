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
    }

    return (beats[firstHand] === secondHand) ? 'You win!' : 'The CPU wins!';
  }
};

export default gameLogic;