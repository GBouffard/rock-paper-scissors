import React from 'react';
import PropTypes from 'prop-types';
import ImageButton from './image-button';
import {
  language,
  urls
} from '../constants/game-constants';
import '../App.css';

export default function HandChoicesSection(props) {
  return (
    <section
      className="App__chose-hands">
      <h2>
        {language.handChoice}
      </h2>

      <ImageButton
        url={urls.rockChoice}
        onClick={props.onChoseRock} />

      <ImageButton
        url={urls.paperChoice}
        onClick={props.onChosePaper} />

      <ImageButton
        url={urls.scissorsChoice}
        onClick={props.onChoseScissors} />
    </section>
  );
}

HandChoicesSection.propTypes = {
  onChoseRock: PropTypes.func.isRequired,
  onChosePaper: PropTypes.func.isRequired,
  onChoseScissors: PropTypes.func.isRequired
};