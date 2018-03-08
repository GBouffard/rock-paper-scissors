import React from 'react';
import Heading from './heading';
import PropTypes from 'prop-types';
import {
  language,
  imageKeywords
} from '../constants/game-constants';
import '../App.css';

export default function CompareHandsSection(props) {
  const gameLanguage = props.twoPlayersGame ? language.twoPlayersGame : language.onePlayerGame;
  const playerOneImage = imageKeywords.playerOne[props.resultsIndex];
  const playerTwoImage = imageKeywords.playerTwo[props.resultsIndex];

  return (
    <section
        className="App__compare-hands">
      <div
        className="App__compare-hands-hand">
        <Heading
          tag={'h3'}
          children={gameLanguage.player1} />
        <img
          alt=""
          src={`/images/${playerOneImage}_${props.playerOneHand}.jpg`}/>
      </div>

      <div
        className="App__compare-hands-hand">
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
  twoPlayersGame: PropTypes.bool,
  playerOneHand: PropTypes.string,
  playerTwoHand: PropTypes.string,
  resultsIndex: PropTypes.number
};