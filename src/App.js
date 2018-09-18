import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ImageButton from './components/atoms/image-button';
import Heading from './components/atoms/heading';
import {
  language,
  urls,
  baseUrl
} from './constants/game-constants';
import './css/App.css';
import './css/buttons.css';
import Media from 'react-media';

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
    const renderGameLogo = (isMobile) =>
      <img
        alt="Guillaume Rock Paper Scissors logo"
        className={`App__logo ${isMobile ? 'App__logo--mobile' : null}`}
        src={`${baseUrl}/images/Guillaume_s_RPS_logo.png`} />;

    const renderHeading = (isMobile) =>
      <Heading
        className={isMobile ? 'App__intro-heading--mobile' : 'App__intro-heading'}
        children={language.gameType} />;

    const renderGameModeButton = (isMobile, numberOfPlayers) => (
      <ImageButton
        url={numberOfPlayers === 1 ? urls.onePlayerGame : urls.twoPlayersGame}
        onClick={numberOfPlayers === 1 ? this.playOnePlayerGame : this.playTwoPlayersGame}
        className={`game-type-button ${isMobile ? 'game-type-button-mobile' : null}`}
        ariaLabel={`${numberOfPlayers === 1 ? "one player game" : "two players game"} button`} />
    );

    return (
      <div
        className="App">

        <Media query="(max-width: 640px)">
          {isMobile => [
            renderGameLogo(isMobile),
            renderHeading(isMobile)
          ]}
        </Media>

        <div>
          <Media query="(max-width: 640px)">
            {isMobile => [
              renderGameModeButton(isMobile, 1),
              renderGameModeButton(isMobile, 2)
            ]}
          </Media>
        </div>

        {this.state.redirect}
      </div>
    );
  }
}

export default App;
