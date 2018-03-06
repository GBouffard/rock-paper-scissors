import React from 'react';
import PropTypes from 'prop-types';
import ImageButton from './image-button';
import {
  language,
  urls
} from '../constants/game-constants';

export default function HandChoicesSection(props) {
  return (
    <section>
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