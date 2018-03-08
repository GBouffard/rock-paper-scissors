import React, { Component } from 'react';
import gameLogic from '../../services/game-logic';
import HandChoicesSection from '../molecules/hand-choices-section';
import CompareHandsSection from '../molecules/compare-hands-section';
import NewGameButton from '../atoms/new-game-button';
import HomePageButton from '../atoms/home-page-button';
import WaitingForPlayer from '../atoms/waiting-for-player';
import {
  hands,
  language
} from '../../constants/game-constants';
import '../../css/App.css';
import '../../css/buttons.css';

export default class TwoPlayersGame extends Component {
  constructor() {
    super();
    this.choseRockOne = this.choseRockOne.bind(this);
    this.chosePaperOne = this.chosePaperOne.bind(this);
    this.choseScissorsOne = this.choseScissorsOne.bind(this);
    this.choseRockTwo = this.choseRockTwo.bind(this);
    this.chosePaperTwo = this.chosePaperTwo.bind(this);
    this.choseScissorsTwo = this.choseScissorsTwo.bind(this);
    this.newGame = this.newGame.bind(this);
    this.state = {
      playerOneHand: null,
      playerTwoHand: null
    }
  }

  newGame() {
    this.setState({
      playerOneHand: null,
      playerTwoHand: null
    });
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

    const playerOneHandChoices = (
      <HandChoicesSection
        isTwoPlayersGame={true}
        heading={language.twoPlayersGame.player1Heading}
        onChoseRock={this.choseRockOne}
        onChosePaper={this.chosePaperOne}
        onChoseScissors={this.choseScissorsOne} />
    );

    const waitingForPlayerTwo = (
      <WaitingForPlayer
        children={language.twoPlayersGame.player1waiting} />
    );

    const onlyPlayerOneChose = this.state.playerOneHand && !this.state.playerTwoHand;
    const playerOneChoice = onlyPlayerOneChose ? waitingForPlayerTwo : playerOneHandChoices;

    const playerTwoHandChoices = (
      <HandChoicesSection
        isTwoPlayersGame={true}
        heading={language.twoPlayersGame.player2Heading}
        onChoseRock={this.choseRockTwo}
        onChosePaper={this.chosePaperTwo}
        onChoseScissors={this.choseScissorsTwo} />
    );

    const waitingForPlayerOne = (
      <WaitingForPlayer
        children={language.twoPlayersGame.player2waiting} />
    );

    const onlyPlayerTwoChose = this.state.playerTwoHand && !this.state.playerOneHand;
    const playerTwoChoice = onlyPlayerTwoChose ? waitingForPlayerOne : playerTwoHandChoices;

    const newGameButton = (
      <NewGameButton
        onClick={this.newGame} />
    );

    const playersChoices = (
      <section
        className="two-players-hand-choices-section-container">
        {playerOneChoice}
        {playerTwoChoice}
      </section>
    );

    const playSection = bothHandsChosen ? newGameButton : playersChoices;

    return (
      <div className="App">
        {playSection}
        {bothHandsChosen && compareHandsSectionElement}
        {bothHandsChosen && gameResultsSectionElement}
        <HomePageButton />
      </div>
    );
  }
}
