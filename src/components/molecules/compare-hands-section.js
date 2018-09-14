import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Media from 'react-media';
import Heading from '../atoms/heading';
import {
  language,
  imageKeywords,
  baseUrl
} from '../../constants/game-constants';
import '../../css/compare-hands-section.css';

const mainClass = 'compare-hands-section';

export default function CompareHandsSection(props) {
  const gameLanguage = language[props.isTwoPlayersGame ? 'twoPlayersGame' : 'onePlayerGame'];
  const resultOne = imageKeywords.playerOne[props.resultsIndex];
  const resultTwo = imageKeywords.playerTwo[props.resultsIndex];

  const mainClassName = classNames(mainClass, {
    'static': props.isTwoPlayersGame
  });


  const chosenHandElement = (heading, result, choice) => {
    const resultImageUrl = `${baseUrl}/images/${result}_${choice.toLowerCase()}.jpg`;

    return (
      <Media query="(max-width: 640px)">
        {isMobile =>
          <div
            className={`${mainClass}__hand ${isMobile ? `${mainClass}__hand--mobile` : null}`}>
            <Heading
              tag={'h3'}
              className={`${mainClass}__hand-heading`}
              children={heading} />
            <img
              className={`${isMobile ? `${mainClass}__hand-image--mobile` : null}`}
              alt=""
              src={resultImageUrl} />
          </div>
        }
      </Media>
    );
  }

  const player1ChosenHand = chosenHandElement(gameLanguage.player1, resultOne, props.playerOneHand);
  const player2ChosenHand = chosenHandElement(gameLanguage.player2, resultTwo, props.playerTwoHand);

  return (
    <section
      className={mainClassName}>
      {player1ChosenHand}
      {player2ChosenHand}
    </section>
  );
}

CompareHandsSection.propTypes = {
  isTwoPlayersGame: PropTypes.bool,
  playerOneHand: PropTypes.string,
  playerTwoHand: PropTypes.string,
  resultsIndex: PropTypes.number
};