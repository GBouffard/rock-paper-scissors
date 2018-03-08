import React from 'react';
import Button from './button';
import {
  language
} from '../../constants/game-constants';
import PropTypes from 'prop-types';

export default function NewGameButton({ onClick }) {
  return (
    <Button
      className="new-game-button"
      children={language.newGame}
      onClick={onClick}/>
  );
}

NewGameButton.propTypes = {
  onClick: PropTypes.func.isRequired
}