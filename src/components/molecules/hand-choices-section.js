import React from 'react';
import PropTypes from 'prop-types';
import ImageButton from '../atoms/image-button';
import Heading from '../atoms/heading';
import {
  urls
} from '../../constants/game-constants';
import '../../css/buttons.css';
import '../../css/hand-choices-section.css';
import Media from 'react-media';

const mainClass = 'hand-choices-section';

const isMobileViewImageButton = (isMobileView, url, onClick) => (
  <ImageButton
    url={url}
    className={isMobileView ? 'image-button-mobile' : 'image-button'}
    onClick={onClick} />
);

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

        <Media query="(max-width: 640px)">
          {isMobile => [
            isMobileViewImageButton(isMobile, urls.rockChoice, props.onChoseRock),
            isMobileViewImageButton(isMobile, urls.paperChoice, props.onChosePaper),
            isMobileViewImageButton(isMobile, urls.scissorsChoice, props.onChoseScissors)
          ]}
        </Media>

      </div>
    </section>
  );
}

HandChoicesSection.propTypes = {
  onChoseRock: PropTypes.func.isRequired,
  onChosePaper: PropTypes.func.isRequired,
  onChoseScissors: PropTypes.func.isRequired,
  heading: PropTypes.string,
  isTwoPlayersGame: PropTypes.bool,
};