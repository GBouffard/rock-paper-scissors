import React from 'react';
import PropTypes from 'prop-types';
import ImageButton from './image-button';
import {
  urls
} from '../constants/game-constants';
import '../App.css';

export default function HandChoicesSection(props) {
  return (
    <section
      className={`App__${props.className}-chose-hands`}>

      <div
        className={`App__${props.className}-chose-hands-title`}>
        {props.heading}
      </div>

      <div
        className={`App__${props.className}-chose-hands-choices`}>
        <ImageButton
          className="image-button"
          url={urls.rockChoice}
          onClick={props.onChoseRock} />

        <ImageButton
          className="image-button"
          url={urls.paperChoice}
          onClick={props.onChosePaper} />

        <ImageButton
          className="image-button"
          url={urls.scissorsChoice}
          onClick={props.onChoseScissors} />
      </div>
    </section>
  );
}

HandChoicesSection.propTypes = {
  onChoseRock: PropTypes.func.isRequired,
  onChosePaper: PropTypes.func.isRequired,
  onChoseScissors: PropTypes.func.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string
};