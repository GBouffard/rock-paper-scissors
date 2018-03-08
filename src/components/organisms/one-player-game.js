import React, { Component } from 'react';
import gameLogic from '../../services/game-logic';
import HandChoicesSection from '../molecules/hand-choices-section';
import CompareHandsSection from '../molecules/compare-hands-section';
import HomePageButton from '../atoms/home-page-button';
import {
  hands,
  language
} from '../../constants/game-constants';
import '../../css/App.css';

export default class OnePlayerGame extends Component {
  constructor() {
    super();
    this.choseRock = this.choseRock.bind(this);
    this.chosePaper = this.chosePaper.bind(this);
    this.choseScissors = this.choseScissors.bind(this);
    this.state = {
      playerOneHand: null
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
      playerOneHand: hand
    });
  }

  render() {
    let playerTwoHand;
    let resultsIndex;
    let results;

    if (this.state.playerOneHand) {
      playerTwoHand = gameLogic.choseCPUHand();
      resultsIndex = gameLogic.gameResult(this.state.playerOneHand, playerTwoHand);
      results = language.onePlayerGame.results[resultsIndex];
    }

    const compareHandsSectionElement = (
      <CompareHandsSection
        playerTwoHand={playerTwoHand}
        resultsIndex={resultsIndex}
        playerOneHand={this.state.playerOneHand} />
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
          heading={language.onePlayerGame.heading}
          onChoseRock={this.choseRock}
          onChosePaper={this.chosePaper}
          onChoseScissors={this.choseScissors} />

        {playerTwoHand && compareHandsSectionElement}
        {results && gameResultsSectionElement}

        <HomePageButton />
      </div>
    );
  }
}
