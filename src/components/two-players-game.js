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

export default class TwoPlayersGame extends Component {
  constructor() {
    super();
    this.choseRockOne = this.choseRockOne.bind(this);
    this.chosePaperOne = this.chosePaperOne.bind(this);
    this.choseScissorsOne = this.choseScissorsOne.bind(this);
    this.choseRockTwo = this.choseRockTwo.bind(this);
    this.chosePaperTwo = this.chosePaperTwo.bind(this);
    this.choseScissorsTwo = this.choseScissorsTwo.bind(this);
    this.state = {
      playerOneHand: null,
      playerTwoHand: null
    }
  }

  choseRockOne() {
    this.setHandStateOne(hands.rock);
  }

  chosePaperOne() {
    this.setHandStateOne(hands.paper);
  }

  choseScissorsOne() {
    this.setHandStateOne(hands.scissors);
  }

  setHandStateOne(hand) {
    this.setState({
      playerOneHand: hand
    });
  }

  choseRockTwo() {
    this.setHandStateTwo(hands.rock);
  }

  chosePaperTwo() {
    this.setHandStateTwo(hands.paper);
  }

  choseScissorsTwo() {
    this.setHandStateTwo(hands.scissors);
  }

  setHandStateTwo(hand) {
    this.setState({
      playerTwoHand: hand
    });
  }


  render() {
    let resultsIndex;
    let results;
    const bothHandsChosen = this.state.playerOneHand && this.state.playerTwoHand;

    if (bothHandsChosen) {
      resultsIndex = gameLogic.gameResult(this.state.playerOneHand, this.state.playerTwoHand);
      results = language.twoPlayersGame.results[resultsIndex];
    }

    const compareHandsSectionElement = (
      <CompareHandsSection
        twoPlayersGame={true}
        playerOneHand={this.state.playerOneHand}
        playerTwoHand={this.state.playerTwoHand}
        resultsIndex={resultsIndex} />
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
          onChoseRock={this.choseRockOne}
          onChosePaper={this.chosePaperOne}
          onChoseScissors={this.choseScissorsOne} />

        <HandChoicesSection
          onChoseRock={this.choseRockTwo}
          onChosePaper={this.chosePaperTwo}
          onChoseScissors={this.choseScissorsTwo} />

        {bothHandsChosen && compareHandsSectionElement}
        {bothHandsChosen && gameResultsSectionElement}

        <HomePageButton />
      </div>
    );
  }
}
