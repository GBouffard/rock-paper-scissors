import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AppHeader from './components/molecules/app-header';
import Heading from './components/atoms/heading';
import ImageButton from './components/atoms/image-button';
import Dashboard from './components/molecules/dashboard';
import {
  language,
  urls,
} from './constants/game-constants';
import './css/App.css';
import './css/dashboard.css';
import './css/buttons.css';
import Media from 'react-media';

const shouldShowDashboard = document.cookie.includes("showDashboard=true");

class App extends Component {
  constructor() {
    super();
    this.playOnePlayerGame = this.playOnePlayerGame.bind(this);
    this.playTwoPlayersGame = this.playTwoPlayersGame.bind(this);
    this.state = {
      redirect: null
    }
  }

  createRedirectLink(to) {
    return (
      <Redirect
        to={`/${to}`} />
    );
  }

  playOnePlayerGame() {
    this.setState({
      redirect: this.createRedirectLink('one-player-game')
    });
  }

  playTwoPlayersGame() {
    this.setState({
      redirect: this.createRedirectLink('two-players-game')
    });
  }

  render() {
    const gameModeHeading = (isMobile) =>
      <Heading
        className={isMobile ? 'App__intro-heading--mobile' : 'App__intro-heading'}
        children={language.gameType} />;

    const gameModeButton = (isMobile, numberOfPlayers) => (
      <ImageButton
        url={numberOfPlayers === 1 ? urls.onePlayerGame : urls.twoPlayersGame}
        onClick={numberOfPlayers === 1 ? this.playOnePlayerGame : this.playTwoPlayersGame}
        className={`game-type-button ${isMobile ? 'game-type-button-mobile' : null}`}
        ariaLabel={`${numberOfPlayers === 1 ? "one player game" : "two players game"} button`} />
    );

    return (
      <div
        className="App">

        <AppHeader />

        <Media query="(max-width: 640px)">
          {isMobile => gameModeHeading(isMobile)}
        </Media>

        <div>
          <Media query="(max-width: 640px)">
            {isMobile => [
              gameModeButton(isMobile, 1),
              gameModeButton(isMobile, 2)
            ]}
          </Media>
        </div>

        {shouldShowDashboard && <Dashboard />}

        {this.state.redirect}
      </div>
    );
  }
}

export default App;
