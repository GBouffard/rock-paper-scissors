import gameLogic from '../services/game-logic';

const expectedWins = (draws, wins1, wins2) => ({
  draws: draws,
  player1: wins1,
  player2: wins2
});

describe('gameLogic.wins', () => {
  it('starts with a value of 0 for draws, player1 and player2', () => {
    expect(gameLogic.wins).toEqual(expectedWins(0, 0, 0));
  });

  it('adds 1 to the wins.draws value when the result is a draw', () => {
    gameLogic.gameResult('Rock', 'Rock');
    expect(gameLogic.wins).toEqual(expectedWins(1, 0, 0));
  });

  it('adds 1 to the wins.player1 value when the player1 wins the game', () => {
    gameLogic.gameResult('Rock', 'Scissors');
    expect(gameLogic.wins).toEqual(expectedWins(1, 1, 0));
  });

  it('adds 1 to the wins.player2 value when the player2 wins the game', () => {
    gameLogic.gameResult('Scissors', 'Rock');
    expect(gameLogic.wins).toEqual(expectedWins(1, 1, 1));
  });

  it('knows the correct values of wins for draws, player1 and player 2 whem multiple games have been played', () => {
    for (let i = 0; i < 2; i++) {
      gameLogic.gameResult('Rock', 'Rock');
    }

    for (let j = 0; j < 5; j++) {
      gameLogic.gameResult('Rock', 'Scissors');
    }

    for (let j = 0; j < 8; j++) {
      gameLogic.gameResult('Scissors', 'Rock');
    }

    expect(gameLogic.wins).toEqual(expectedWins(3, 6, 9));
  });
});
