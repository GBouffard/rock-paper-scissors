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
  onePlayerGame: {
    player1: 'You chose:',
    player2: 'The CPU chose:',
    heading: 'CHOOSE YOUR DESTINY!',
    results: [
      'It\'s a Draw!',
      'You win!',
      'The CPU wins!'
    ]
  },
  twoPlayersGame: {
    player1: 'Player 1 chose:',
    player2: 'Player 2 chose:',
    player1Heading: 'PLAYER 1:',
    player2Heading: 'PLAYER 2:',
    player1waiting: 'Waiting for Player 2',
    player2waiting: 'Waiting for Player 1',
    results: [
      'It\'s a Draw!',
      'Player 1 wins!',
      'Player 2 wins!'
    ]
  },
  newGame: 'NEW GAME',
  backToHomePage: 'Back to home page'
};

const baseUrl = process.env.PUBLIC_URL;

const urls = {
  onePlayerGame: `${baseUrl}/images/1_player_game.svg`,
  twoPlayersGame: `${baseUrl}/images/2_players_game.svg`,
  rockChoice: `${baseUrl}/images/hand_rock.jpg`,
  paperChoice: `${baseUrl}/images/hand_paper.jpg`,
  scissorsChoice: `${baseUrl}/images/hand_scissors.jpg`
};

const imageKeywords = {
  playerOne: ['draw', 'win', 'lose'],
  playerTwo: ['draw', 'lose', 'win']
};

export {
  hands,
  language,
  baseUrl,
  urls,
  beats,
  imageKeywords
};