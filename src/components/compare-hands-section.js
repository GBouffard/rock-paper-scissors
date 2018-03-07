import React from 'react';
import PropTypes from 'prop-types';
import {
  language,
  imageKeywords
} from '../constants/game-constants';
import '../App.css';

export default function CompareHandsSection(props) {
  const playerOneImage = imageKeywords.playerOne[props.resultsIndex];
  const playerTwoImage = imageKeywords.playerTwo[props.resultsIndex];

  return (
    <section
        className="App__compare-hands">
      <div
        className="App__compare-hands-hand">
        <h3>
          {language.onePlayerGame.player1}
        </h3>
        <img
          alt=""
          src={`/images/${playerOneImage}_${props.playerOneHand}.jpg`}/>
      </div>

      <div
        className="App__compare-hands-hand">
        <h3>
          {language.onePlayerGame.player2}
        </h3>
        <img
          alt=""
          src={`/images/${playerTwoImage}_${props.playerTwoHand}.jpg`}/> 
      </div>
    </section>
  );
}

CompareHandsSection.propTypes = {
  playerOneHand: PropTypes.string,
  playerTwoHand: PropTypes.string,
  resultsIndex: PropTypes.number
};