import React, { Component } from 'react';
import gameLogic from './services/game-logic';
import './App.css';
import Button from './components/button';

class App extends Component {
  constructor() {
    super();
    this.choseRock = this.choseRock.bind(this);
    this.chosePaper = this.chosePaper.bind(this);
    this.choseScissors = this.choseScissors.bind(this);
    this.state = {
      yourHand: null
    }
  }

  choseRock() {
    this.setHandState('Rock');
  }

  chosePaper() {
    this.setHandState('Paper');
  }

  choseScissors() {
    this.setHandState('Scissors');
  }

  setHandState(hand) {
    this.setState({
      yourHand: hand
    });
  }

  render() {
    const cpuHand = gameLogic.choseCPUHand();
    const result = gameLogic.gameResult(this.state.yourHand, cpuHand);

    return (
      <div className="App">
        <div>
          Choose a hand:

          <Button
            text="Rock"
            onClick={this.choseRock} />

          <Button
            text="Paper"
            onClick={this.chosePaper} />

          <Button
            text="Scissors"
            onClick={this.choseScissors} />
        </div>

        <div>
          You chose: {this.state.yourHand}
        </div>

        <div>
          The CPU chose: {cpuHand}
        </div>

        <div>
          Result: {result}
        </div>
      </div>
    );
  }
}

export default App;
