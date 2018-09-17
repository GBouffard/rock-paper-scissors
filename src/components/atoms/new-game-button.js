import React from 'react';
import Button from './button';
import {
  language
} from '../../constants/game-constants';
import PropTypes from 'prop-types';

export default function NewGameButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="new-game-button"
      aria-label="new game button"
      children={language.newGame} />
  );
}

NewGameButton.propTypes = {
  onClick: PropTypes.func.isRequired
}