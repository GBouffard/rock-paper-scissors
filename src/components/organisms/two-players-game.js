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
    this.newGame = this.newGame.bind(this);
    this.choseHand = this.choseHand.bind(this);
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

  choseHand(playerID, hand) {
    this.setState({
      [`player${playerID === 1 ? 'One' : 'Two'}Hand`]: hand
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

    const renderPlayerChoiceSection = (playerID, heading, choseHand, waiting, whoChose) => {
      const playerHandChoices = (
        <HandChoicesSection
          isTwoPlayersGame={true}
          heading={heading}
          onChoseRock={() => choseHand(playerID, hands.rock)}
          onChosePaper={() => choseHand(playerID, hands.paper)}
          onChoseScissors={() => choseHand(playerID, hands.scissors)} />
      );

      const waitingForPlayer = (
        <WaitingForPlayer
          children={waiting} />
      );

      return whoChose ? waitingForPlayer : playerHandChoices;
    };

    const onlyPlayerOneChose = this.state.playerOneHand && !this.state.playerTwoHand;
    const playerOneChoice = renderPlayerChoiceSection(1, language.twoPlayersGame.player1Heading, this.choseHand, language.twoPlayersGame.player1waiting, onlyPlayerOneChose);

    const onlyPlayerTwoChose = this.state.playerTwoHand && !this.state.playerOneHand;
    const playerTwoChoice = renderPlayerChoiceSection(2, language.twoPlayersGame.player2Heading, this.choseHand, language.twoPlayersGame.player2waiting, onlyPlayerTwoChose);

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
