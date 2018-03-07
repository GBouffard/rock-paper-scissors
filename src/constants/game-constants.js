const hands = {
  rock: 'Rock',
  paper: 'Paper',
  scissors: 'Scissors'
};

const beats = {
  Rock: 'Scissors',
  Scissors: 'Paper',
  Paper: 'Rock'
};

const language = {
  gameType: 'Choose your game type:',
  handChoice: 'CHOOSE YOUR DESTINY!',
  playerOneHandChoice: 'PLAYER 1:',
  playerTwoHandChoice: 'PLAYER 2:',
  onePlayerGame: {
    player1: 'You chose:',
    player2: 'The CPU chose:',
    results: [
      'It\'s a Draw!',
      'You win!',
      'The CPU wins!'
    ]
  },
  twoPlayersGame: {
    player1: 'Player 1 chose:',
    player2: 'Player 2 chose:',
    results: [
      'It\'s a Draw!',
      'Player 1 wins!',
      'Player 2 wins!'
    ]
  },
  backToHomePage: 'Back to home page'
};

const urls = {
  onePlayerGame: '/images/1_player_game.png',
  twoPlayersGame: '/images/2_players_game.png',
  rockChoice: '/images/hand_rock.jpg',
  paperChoice: '/images/hand_paper.jpg',
  scissorsChoice: '/images/hand_scissors.jpg'
};

const imageKeywords = {
  playerOne: ['draw', 'win', 'lose'],
  playerTwo: ['draw', 'lose', 'win']
};

export {
  hands,
  language,
  urls,
  beats,
  imageKeywords
};