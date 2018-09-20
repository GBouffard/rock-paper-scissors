
import React from 'react';
import PropTypes from 'prop-types';
import {
  language
} from '../../constants/game-constants';

const DesktopBanner = (props) =>
  !props.isMobile &&
  <div className="App__desktop-banner">
    {language.desktopBanner}
  </div>;

export default DesktopBanner;

DesktopBanner.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
