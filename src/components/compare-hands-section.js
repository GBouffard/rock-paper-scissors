import React from 'react';
import PropTypes from 'prop-types';
import {
  language
} from '../constants/game-constants';

export default function CompareHandsSection(props) {
  return (
    <section>
      <div>
        <h3>
          {language.yourChoice}
        </h3>
        {props.playerHand}
      </div>

      <div>
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