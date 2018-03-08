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
  const playerOneImage = imageKeywords.playerOne[props.resultsIndex];
  const playerTwoImage = imageKeywords.playerTwo[props.resultsIndex];

  return (
    <section
        className={mainClass}>

      <div
        className={`${mainClass}__hand`}>
        <Heading
          tag={'h3'}
          children={gameLanguage.player1} />
        <img
          alt=""
          src={`/images/${playerOneImage}_${props.playerOneHand}.jpg`}/>
      </div>

      <div
        className={`${mainClass}__hand`}>
        <Heading
          tag={'h3'}
          children={gameLanguage.player2} />
        <img
          alt=""
          src={`/images/${playerTwoImage}_${props.playerTwoHand}.jpg`}/> 
      </div>

    </section>
  );
}

CompareHandsSection.propTypes = {
  isTwoPlayersGame: PropTypes.bool,
  playerOneHand: PropTypes.string,
  playerTwoHand: PropTypes.string,
  resultsIndex: PropTypes.number
};