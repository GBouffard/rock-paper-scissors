import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import GameLogo from '../atoms/game-logo';
import {
  baseUrl
} from '../../constants/game-constants';

const AppHeader = () =>
  <Media query="(max-width: 640px)">
    {isMobile => <GameLogo isMobile={isMobile} />}
  </Media>

export default AppHeader;