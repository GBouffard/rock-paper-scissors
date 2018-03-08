import React from 'react';
import Heading from '../atoms/heading';
import PropTypes from 'prop-types';
import {
  language,
  imageKeywords
} from '../../constants/game-constants';
import '../../css/compare-hands-section.css';

const mainClass = 'compare-hands-section';

export default function CompareHandsSection(props) {
  const gameLanguage = language[props.isTwoPlayersGame ? 'twoPlayersGame' : 'onePlayerGame'];
  const resultOne = imageKeywords.playerOne[props.resultsIndex];
  const resultTwo = imageKeywords.playerTwo[props.resultsIndex];

  const chosenHandElement = (heading, result, choice) => {
    return (
      <div
        className={`${mainClass}__hand`}>
        <Heading
          tag={'h3'}
          children={heading} />
        <img
          alt=""
          src={`/images/${result}_${choice}.jpg`}/>
      </div>
    );
  }

  const player1ChosenHand = chosenHandElement(gameLanguage.player1, resultOne, props.playerOneHand);
  const player2ChosenHand = chosenHandElement(gameLanguage.player2, resultTwo, props.playerTwoHand);

  return (
    <section
      className={mainClass}>
      {player1ChosenHand}
      {player2ChosenHand}
    </section>
  );
}

CompareHandsSection.propTypes = {
  isTwoPlayersGame: PropTypes.bool,
  playerOneHand: PropTypes.string,
  playerTwoHand: PropTypes.string,
  resultsIndex: PropTypes.number
};