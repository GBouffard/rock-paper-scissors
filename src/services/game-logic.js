import _ from 'lodash';

const gameLogic = {
  choseCPUHand() {
    return _.sample(['Rock', 'Paper', 'Scissors']); 
  },

  gameResult(firstHand, secondHand) {
    if (firstHand === secondHand) {
      return `It's a Draw!`
    }
  }
};

export default gameLogic;