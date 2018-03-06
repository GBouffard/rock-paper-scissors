import React, { Component } from 'react';
import gameLogic from './services/game-logic';
import ImageButton from './components/image-button';
import {
  hands,
  language,
  urls
} from './constants/game-constants';
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
    this.setHandState(hands.rock);
  }

  chosePaper() {
    this.setHandState(hands.paper);
  }

  choseScissors() {
    this.setHandState(hands.scissors);
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

        <section>
          <h2>
            {language.handChoice}
          </h2>

          <ImageButton
            url={urls.rockChoice}
            onClick={this.choseRock} />

          <ImageButton
            url={urls.paperChoice}
            onClick={this.chosePaper} />

          <ImageButton
            url={urls.scissorsChoice}
            onClick={this.choseScissors} />
        </section>

        <section>
          <div>
            {language.yourChoice} {this.state.yourHand}
          </div>

          <div>
            {language.cpuChoice} {cpuHand}
          </div>
        </section>

        <section>
          <h2>
            {language.results}
          </h2>

          {result}
        </section>
      </div>
    );
  }
}

export default App;
