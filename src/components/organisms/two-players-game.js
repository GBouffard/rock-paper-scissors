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

const newGameButton = (onClick) => (
  <NewGameButton
    onClick={onClick} />
);

const individualPlayerChoiceSection = (playerID, isOnlyPlayerWithChoice, choseHand) => {
  const handChoices = (
    <HandChoicesSection
      isTwoPlayersGame={true}
      heading={language.twoPlayersGame[`player${playerID}Heading`]}
      onChoseRock={() => choseHand(playerID, hands.rock)}
      onChosePaper={() => choseHand(playerID, hands.paper)}
      onChoseScissors={() => choseHand(playerID, hands.scissors)}
      playerID={playerID} />
  );

  const waitingForOpponentChoice = (
    <WaitingForOpponentChoice
      children={language.twoPlayersGame[`player${playerID}waiting`]} />
  );

  return isOnlyPlayerWithChoice ? waitingForOpponentChoice : handChoices;
};

const playersChoicesSections = (playerOneChoice, playerTwoChoice) => (
  <Media query="(max-width: 640px)">
    {isMobile => <section
      className={`${playersChoicesClass} ${isMobile ? `${playersChoicesClass}--mobile` : null}`}>
      {playerOneChoice}
      {playerTwoChoice}
    </section>
    }
  </Media>
);

const compareHandsSection = (playerOneHand, playerTwoHand, resultsIndex) => (
  <CompareHandsSection
    isTwoPlayersGame={true}
    playerOneHand={playerOneHand}
    playerTwoHand={playerTwoHand}
    resultsIndex={resultsIndex} />
);

const gameResult = (result) => (
  <GameResults
    className="static"
    children={result} />
);

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
    const {
      playerOneHand,
      playerTwoHand
    } = this.state;

    let resultsIndex;
    let result;
    const isPlayerOneOnlyPlayerWithChoice = playerOneHand && !playerTwoHand;
    const isPlayerTwoOnlyPlayerWithChoice = playerTwoHand && !playerOneHand;
    const areBothHandsChosen = playerOneHand && playerTwoHand;

    const playerOneChoice = individualPlayerChoiceSection(1, isPlayerOneOnlyPlayerWithChoice, this.choseHand);
    const playerTwoChoice = individualPlayerChoiceSection(2, isPlayerTwoOnlyPlayerWithChoice, this.choseHand);

    if (areBothHandsChosen) {
      resultsIndex = gameLogic.gameResult(playerOneHand, playerTwoHand);
      result = language.twoPlayersGame.results[resultsIndex];
    }

    return (
      <div className="App">
        {areBothHandsChosen ? newGameButton(this.newGame) : playersChoicesSections(playerOneChoice, playerTwoChoice)}
        {areBothHandsChosen && compareHandsSection(playerOneHand, playerTwoHand, resultsIndex)}
        {areBothHandsChosen && gameResult(result)}
        <HomePageButton />
      </div>
    );
  }
}
