import React, { Component } from 'react';
import gameLogic from '../services/game-logic';
import HandChoicesSection from '../components/hand-choices-section';
import CompareHandsSection from '../components/compare-hands-section';
import HomePageButton from '../components/home-page-button';
import {
  hands,
  language
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
    let resultsIndex;
    let results;

    if (this.state.playerHand) {
      cpuHand = gameLogic.choseCPUHand();
      resultsIndex = gameLogic.gameResult(this.state.playerHand, cpuHand);
      results = language.onePlayerResults[resultsIndex];
    }

    const compareHandsSectionElement = (
      <CompareHandsSection
        cpuHand={cpuHand}
        resultsIndex={resultsIndex}
        playerHand={this.state.playerHand} />
    );

    const gameResultsSectionElement = (
      <section
        className="App__results">
        {results}
      </section>
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
