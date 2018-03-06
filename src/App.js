import React, { Component } from 'react';
import gameLogic from './services/game-logic';
import HandChoicesSection from './components/hand-choices-section';
import CompareHandsSection from './components/compare-hands-section';
import GameResultsSection from './components/game-results-section';
import {
  hands,
  language
} from './constants/game-constants';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.choseRock = this.choseRock.bind(this);
    this.chosePaper = this.chosePaper.bind(this);
    this.choseScissors = this.choseScissors.bind(this);
    this.state = {
      playerHand: null
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
      playerHand: hand
    });
  }

  render() {
    const cpuHand = gameLogic.choseCPUHand();
    const results = gameLogic.gameResult(this.state.playerHand, cpuHand);

    let compareHandsSectionElement;
    if (this.state.playerHand) {
      compareHandsSectionElement = (
        <CompareHandsSection
          cpuHand={cpuHand}
          playerHand={this.state.playerHand} />
      );
    }

    let gameResultsSectionElement;
    if (this.state.playerHand) {
      gameResultsSectionElement = (
        <GameResultsSection
          results={results} />
      );
    }

    return (
      <div className="App">

        <HandChoicesSection
          onChoseRock={this.choseRock}
          onChosePaper={this.chosePaper}
          onChoseScissors={this.choseScissors} />

        {compareHandsSectionElement}
        {gameResultsSectionElement}
      </div>
    );
  }
}

export default App;
