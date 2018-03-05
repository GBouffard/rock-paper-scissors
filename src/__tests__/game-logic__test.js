import gameLogic from '../services/game-logic';

describe('game logic', () => {
  it('chooses a random RPS hand for the CPU when playing a 1 player game', () => {
    const chosenCPUHand = gameLogic.choseCPUHand();

    expect(['Rock', 'Paper', 'Scissors'])
      .toEqual(expect.arrayContaining([chosenCPUHand]))
  });

  it('knows when the result of a game is a draw', () => {
    expect(gameLogic.gameResult('Rock', 'Rock'))
      .toEqual('It\'s a Draw!');
  });

  it('knows when the player won the game', () => {
    expect(gameLogic.gameResult('Paper', 'Rock'))
      .toEqual('You win!');
  });

  it('knows when the player lost the game', () => {
    expect(gameLogic.gameResult('Rock', 'Paper'))
      .toEqual('The CPU wins!');
  });
});
