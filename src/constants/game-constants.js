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
  handChoice: 'Choose your destiny:',
  yourChoice: 'You chose:',
  cpuChoice: 'The CPU chose:',
  onePlayerResults: [
    'It\'s a Draw!',
    'You win!',
    'The CPU wins!'
  ],
  backToHomePage: 'Back to home page'
};

const urls = {
  onePlayerGame: '/images/1_player_game.png',
  twoPlayersGame: '/images/2_players_game.png',
  rockChoice: '/images/hand_rock.jpg',
  paperChoice: '/images/hand_paper.jpg',
  scissorsChoice: '/images/hand_scissors.jpg'
};

export {
  hands,
  language,
  urls,
  beats
};