import React from 'react';
import PropTypes from 'prop-types';
import {
  language
} from '../constants/game-constants';
import '../App.css';

export default function CompareHandsSection(props) {
  const playerImage = props.resultsIndex === 1 ? 'win' : 'lose';
  const cpuImage = props.resultsIndex === 2 ? 'win' : 'lose';

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
          src={`/images/${playerImage}_${props.playerHand}.jpg`}/>
      </div>

      <div
        className="App__compare-hands-hand">
        <h3>
          {language.cpuChoice}
        </h3>
        <img
          alt=""
          src={`/images/${cpuImage}_${props.cpuHand}.jpg`}/> 
      </div>
    </section>
  );
}

CompareHandsSection.propTypes = {
  playerHand: PropTypes.string,
  cpuHand: PropTypes.string,
  resultsIndex: PropTypes.number
};