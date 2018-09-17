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

const playerChoiceSection = (choseHand) => (
  <HandChoicesSection
    heading={language.onePlayerGame.heading}
    onChoseRock={() => choseHand(hands.rock)}
    onChosePaper={() => choseHand(hands.paper)}
    onChoseScissors={() => choseHand(hands.scissors)}
    playerID={1} />
);

const compareHandsSection = (playerOneHand, playerTwoHand, resultsIndex) => (
  <CompareHandsSection
    playerOneHand={playerOneHand}
    playerTwoHand={playerTwoHand}
    resultsIndex={resultsIndex} />
);

const gameResult = (result) => (
  <GameResults
    children={result} />
);

export default class OnePlayerGame extends Component {
  constructor() {
    super();
    this.choseHand = this.choseHand.bind(this);
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
    const { playerOneHand } = this.state;
    let cpuHand;
    let resultsIndex;
    let result;

    if (playerOneHand) {
      cpuHand = gameLogic.choseCPUHand();
      resultsIndex = gameLogic.gameResult(playerOneHand, cpuHand);
      result = language.onePlayerGame.results[resultsIndex];
    }

    return (
      <div className="App">
        {playerChoiceSection(this.choseHand)}
        {cpuHand && compareHandsSection(playerOneHand, cpuHand, resultsIndex)}
        {result && gameResult(result)}
        <HomePageButton />
      </div>
    );
  }
}
