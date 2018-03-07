import React from 'react';
import PropTypes from 'prop-types';
import {
  language
} from '../constants/game-constants';
import '../App.css';

export default function CompareHandsSection(props) {
  return (
    <section
        className="App__compare-hands">
      <div
        className="App__compare-hands-hand">
        <h3>
          {language.yourChoice}
        </h3>
        {props.playerHand}
      </div>

      <div
        className="App__compare-hands-hand">
        <h3>
          {language.cpuChoice}
        </h3>
        {props.cpuHand} 
      </div>
    </section>
  );
}

CompareHandsSection.propTypes = {
  playerHand: PropTypes.string,
  cpuHand: PropTypes.string
};