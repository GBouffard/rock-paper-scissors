import React from 'react';
import PropTypes from 'prop-types';
import {
  baseUrl
} from '../../constants/game-constants';

const GameLogo = (props) =>
  <img
    alt="Guillaume Rock Paper Scissors logo"
    className={`App__logo ${props.isMobile ? 'App__logo--mobile' : null}`}
    src={`${baseUrl}/images/Guillaume_s_RPS_logo.png`} />;

export default GameLogo;

GameLogo.propTypes = {
  isMobile: PropTypes.bool.isRequired
};