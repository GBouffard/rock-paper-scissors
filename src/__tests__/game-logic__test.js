import gameLogic from '../services/game-logic';

describe('game logic', () => {
  it('chooses a random hand for the CPU when playing a 1 player game', () => {
    expect(gameLogic.choseCPUHand())
      .toEqual('Rock' || 'Paper' || 'Scissors');
  });

  it('knows when the result of a game is a draw', () => {
    expect(gameLogic.gameResult('Rock', 'Rock'))
      .toEqual(`It's a Draw!`);
  });

  xit('knows when the player won the game', () => {
  });

  xit('knows when the player lost the game', () => {
  });
});
