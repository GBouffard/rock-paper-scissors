import React, { Component } from 'react';
import Media from 'react-media';
import gameLogic from '../../services/game-logic';
import HandChoicesSection from '../molecules/hand-choices-section';
import CompareHandsSection from '../molecules/compare-hands-section';
import NewGameButton from '../atoms/new-game-button';
import HomePageButton from '../atoms/home-page-button';
import WaitingForPlayer from '../atoms/waiting-for-player';
import GameResults from '../atoms/game-results';
import {
  hands,
  language
} from '../../constants/game-constants';
import '../../css/App.css';
import '../../css/buttons.css';

const playersChoicesClass = 'two-players-hand-choices-section-container';

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
        isTwoPlayersGame={true}
        playerOneHand={this.state.playerOneHand}
        playerTwoHand={this.state.playerTwoHand}
        resultsIndex={resultsIndex} />
    );

    const gameResultsElement = (
      <GameResults
        className="static"
        children={results} />
    );

    const makePlayerChoice = (heading, choseRock, chosePaper, choseScissors, waiting, whoChose) => {
      const playerHandChoices = (
        <HandChoicesSection
          isTwoPlayersGame={true}
          heading={heading}
          onChoseRock={choseRock}
          onChosePaper={chosePaper}
          onChoseScissors={choseScissors} />
      );

      const waitingForPlayer = (
        <WaitingForPlayer
          children={waiting} />
      );

      return whoChose ? waitingForPlayer : playerHandChoices;
    };

    const onlyPlayerOneChose = this.state.playerOneHand && !this.state.playerTwoHand;
    const playerOneChoice = makePlayerChoice(language.twoPlayersGame.player1Heading, this.choseRockOne, this.chosePaperOne, this.choseScissorsOne, language.twoPlayersGame.player1waiting, onlyPlayerOneChose);

    const onlyPlayerTwoChose = this.state.playerTwoHand && !this.state.playerOneHand;
    const playerTwoChoice = makePlayerChoice(language.twoPlayersGame.player2Heading, this.choseRockTwo, this.chosePaperTwo, this.choseScissorsTwo, language.twoPlayersGame.player2waiting, onlyPlayerTwoChose);

    const newGameButton = (
      <NewGameButton
        onClick={this.newGame} />
    );

    const playersChoices = (
      <Media query="(max-width: 640px)">
        {isMobile => <section
          className={`${playersChoicesClass} ${isMobile ? `${playersChoicesClass}--mobile` : null}`}>
          {playerOneChoice}
          {playerTwoChoice}
        </section>
        }
      </Media>
    );

    const playSection = bothHandsChosen ? newGameButton : playersChoices;

    return (
      <div className="App">
        {playSection}
        {bothHandsChosen && compareHandsSectionElement}
        {bothHandsChosen && gameResultsElement}
        <HomePageButton />
      </div>
    );
  }
}
