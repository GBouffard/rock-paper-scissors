import React from 'react';
import PropTypes from 'prop-types';
import ImageButton from '../atoms/image-button';
import Heading from '../atoms/heading';
import {
  urls
} from '../../constants/game-constants';
import '../../css/buttons.css';
import '../../css/hand-choices-section.css';

const mainClass = 'hand-choices-section';

export default function HandChoicesSection(props) {
  return (
    <section
      className={mainClass}>

      <Heading
        className={`${mainClass}__title`}
        children={props.heading} />

      <div
        className={`${mainClass}__choices ${mainClass}__choices--${props.className}`}>
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