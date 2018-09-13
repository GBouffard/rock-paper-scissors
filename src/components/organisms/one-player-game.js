import React, { Component } from 'react';
import gameLogic from '../../services/game-logic';
import HandChoicesSection from '../molecules/hand-choices-section';
import CompareHandsSection from '../molecules/compare-hands-section';
import HomePageButton from '../atoms/home-page-button';
import GameResults from '../atoms/game-results';
import {
  hands,
  language
} from '../../constants/game-constants';
import '../../css/App.css';

export default class OnePlayerGame extends Component {
  constructor() {
    super();
    this.state = {
      playerOneHand: null
    }
  }

  choseHand(hand) {
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

    const gameResultsElement = (
      <GameResults
        children={results} />
    );

    return (
      <div className="App">

        <HandChoicesSection
          heading={language.onePlayerGame.heading}
          onChoseRock={() => this.choseHand(hands.rock)}
          onChosePaper={() => this.choseHand(hands.paper)}
          onChoseScissors={() => this.choseHand(hands.scissors)} />

        {playerTwoHand && compareHandsSectionElement}
        {results && gameResultsElement}

        <HomePageButton />
      </div>
    );
  }
}
