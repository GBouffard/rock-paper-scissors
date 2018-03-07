import React, { Component } from 'react';
import gameLogic from '../services/game-logic';
import HandChoicesSection from '../components/hand-choices-section';
import CompareHandsSection from '../components/compare-hands-section';
import GameResultsSection from '../components/game-results-section';
import HomePageButton from '../components/home-page-button';
import {
  hands
} from '../constants/game-constants';
import '../App.css';

export default class OnePlayerGame extends Component {
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
    let cpuHand;
    let results;

    if (this.state.playerHand) {
      cpuHand = gameLogic.choseCPUHand();
      results = gameLogic.gameResult(this.state.playerHand, cpuHand);
    }

    const compareHandsSectionElement = (
      <CompareHandsSection
        cpuHand={cpuHand}
        results={results}
        playerHand={this.state.playerHand} />
    );

    const gameResultsSectionElement = (
      <GameResultsSection
        results={results} />
    );

    return (
      <div className="App">

        <HandChoicesSection
          onChoseRock={this.choseRock}
          onChosePaper={this.chosePaper}
          onChoseScissors={this.choseScissors} />

        {cpuHand && compareHandsSectionElement}
        {results && gameResultsSectionElement}

        <HomePageButton />
      </div>
    );
  }
}
