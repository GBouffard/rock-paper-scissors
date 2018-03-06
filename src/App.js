import React, { Component } from 'react';
import gameLogic from './services/game-logic';
import ImageButton from './components/image-button';
import handChoicesUrl from './constants/game-constants';
import './App.css';

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

          <ImageButton
            url={handChoicesUrl.rock}
            onClick={this.choseRock} />

          <ImageButton
            url={handChoicesUrl.paper}
            onClick={this.chosePaper} />

          <ImageButton
            url={handChoicesUrl.scissors}
            onClick={this.choseScissors} />
        </div>

        <section>
          <div>
            You chose: {this.state.yourHand}
          </div>

          <div>
            The CPU chose: {cpuHand}
          </div>
        </section>

        <div>
          Result: {result}
        </div>
      </div>
    );
  }
}

export default App;
