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
  const gameType = props.isTwoPlayersGame ? 'two-players' : 'one-player';

  return (
    <section
      className={mainClass}>

      <Heading
        className={`${mainClass}__title`}
        children={props.heading} />

      <div
        className={`${mainClass}__choices ${mainClass}__choices--${gameType}`}>
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

HandChoicesSection.defaultProps = {
  isTwoPlayersGame: false
};

HandChoicesSection.propTypes = {
  onChoseRock: PropTypes.func.isRequired,
  onChosePaper: PropTypes.func.isRequired,
  onChoseScissors: PropTypes.func.isRequired,
  heading: PropTypes.string,
  isTwoPlayersGame: PropTypes.bool,
};