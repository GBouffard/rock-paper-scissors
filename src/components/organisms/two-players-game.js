import React, { Component } from 'react';
import Media from 'react-media';
import gameLogic from '../../services/game-logic';
import HandChoicesSection from '../molecules/hand-choices-section';
import CompareHandsSection from '../molecules/compare-hands-section';
import NewGameButton from '../atoms/new-game-button';
import HomePageButton from '../atoms/home-page-button';
import WaitingForOpponentChoice from '../atoms/waiting-for-opponent-choice';
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
    const isPlayerOneOnlyPlayerWithChoice = this.state.playerOneHand && !this.state.playerTwoHand;
    const isPlayerTwoOnlyPlayerWithChoice = this.state.playerTwoHand && !this.state.playerOneHand;
    const areBothHandsChosen = this.state.playerOneHand && this.state.playerTwoHand;

    if (areBothHandsChosen) {
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

    const renderPlayerChoiceSection = (playerID, isOnlyPlayerWithChoice) => {
      const renderHandChoices = (
        <HandChoicesSection
          isTwoPlayersGame={true}
          heading={language.twoPlayersGame[`player${playerID}Heading`]}
          onChoseRock={() => this.choseHand(playerID, hands.rock)}
          onChosePaper={() => this.choseHand(playerID, hands.paper)}
          onChoseScissors={() => this.choseHand(playerID, hands.scissors)} />
      );

      const renderWaitingForOpponentChoice = (
        <WaitingForOpponentChoice
          children={language.twoPlayersGame[`player${playerID}waiting`]} />
      );

      return isOnlyPlayerWithChoice ? renderWaitingForOpponentChoice : renderHandChoices;
    };

    const playerOneChoice = renderPlayerChoiceSection(1, isPlayerOneOnlyPlayerWithChoice);
    const playerTwoChoice = renderPlayerChoiceSection(2, isPlayerTwoOnlyPlayerWithChoice);

    const renderNewGameButton = (
      <NewGameButton
        onClick={this.newGame} />
    );

    const renderPlayersChoicesSections = (
      <Media query="(max-width: 640px)">
        {isMobile => <section
          className={`${playersChoicesClass} ${isMobile ? `${playersChoicesClass}--mobile` : null}`}>
          {playerOneChoice}
          {playerTwoChoice}
        </section>
        }
      </Media>
    );

    return (
      <div className="App">
        {areBothHandsChosen ? renderNewGameButton : renderPlayersChoicesSections}
        {areBothHandsChosen && compareHandsSectionElement}
        {areBothHandsChosen && gameResultsElement}
        <HomePageButton />
      </div>
    );
  }
}
