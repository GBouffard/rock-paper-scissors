import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import ImageButton from '../atoms/image-button';
import Heading from '../atoms/heading';
import {
  urls
} from '../../constants/game-constants';
import '../../css/buttons.css';
import '../../css/hand-choices-section.css';

const mainClass = 'hand-choices-section';

const renderHandImageButton = (isMobileView, url, onClick, ariaLabel) => (
  <ImageButton
    url={url}
    onClick={onClick}
    className={isMobileView ? 'image-button-mobile' : 'image-button'}
    ariaLabel={`${ariaLabel} button`} />
);

export default function HandChoicesSection(props) {
  const gameType = props.isTwoPlayersGame ? 'two-players' : 'one-player';

  return (
    <section
      className={mainClass}>

      <Media query="(max-width: 640px)">
        {isMobile => <Heading
          className={`${mainClass}__title ${isMobile ? `${mainClass}__title--mobile` : null}`}
          children={props.heading} />
        }
      </Media>

      <div
        className={`${mainClass}__choices ${mainClass}__choices--${gameType}`}>

        <Media query="(max-width: 640px)">
          {isMobile => [
            renderHandImageButton(isMobile, urls.rockChoice, props.onChoseRock, `Player ${props.playerID} Rock`),
            renderHandImageButton(isMobile, urls.paperChoice, props.onChosePaper, `Player ${props.playerID} Paper`),
            renderHandImageButton(isMobile, urls.scissorsChoice, props.onChoseScissors, `Player ${props.playerID} Scissors`)
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
  playerID: PropTypes.number.isRequired,
  heading: PropTypes.string,
  isTwoPlayersGame: PropTypes.bool
};