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
          {language.yourChoice}
        </h3>
        <img
          alt=""
          src={`/images/${playerOneImage}_${props.playerHand}.jpg`}/>
      </div>

      <div
        className="App__compare-hands-hand">
        <h3>
          {language.cpuChoice}
        </h3>
        <img
          alt=""
          src={`/images/${playerTwoImage}_${props.cpuHand}.jpg`}/> 
      </div>
    </section>
  );
}

CompareHandsSection.propTypes = {
  playerHand: PropTypes.string,
  cpuHand: PropTypes.string,
  resultsIndex: PropTypes.number
};