import React from 'react';
import Media from 'react-media';
import GameLogo from '../atoms/game-logo';
import DesktopBanner from '../atoms/desktop-banner';

const AppHeader = () =>
  <Media query="(max-width: 640px)">
    {isMobile => [
      <GameLogo isMobile={isMobile} />,
      <DesktopBanner isMobile={isMobile} />
    ]}
  </Media>

export default AppHeader;