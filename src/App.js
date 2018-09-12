import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ImageButton from './components/atoms/image-button';
import Heading from './components/atoms/heading';
import {
  language,
  urls
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
    const isMobileViewHeading = (isMobileView) =>
      <Heading
        className={isMobileView ? 'App__intro-heading--mobile' : 'App__intro-heading'}
        children={language.gameType} />;

    const heading = (
      <Media query="(max-width: 640px)">
        {matches => matches ? isMobileViewHeading(true) : isMobileViewHeading(false)}
      </Media>);

    const isMobileViewButton = (isMobileView, numberOfPlayers) => (
      <ImageButton
        url={numberOfPlayers === 1 ? urls.onePlayerGame : urls.twoPlayersGame}
        className={`game-type-button ${isMobileView ? 'game-type-button-mobile' : null}`}
        onClick={numberOfPlayers === 1 ? this.playOnePlayerGame : this.playTwoPlayersGame} />
    );

    const onePlayerButton =
      (<Media query="(max-width: 640px)">
        {matches => matches ? isMobileViewButton(true, 1) : isMobileViewButton(false, 1)}
      </Media>);

    const twoPlayersButton =
      (<Media query="(max-width: 640px)">
        {matches => matches ? isMobileViewButton(true, 2) : isMobileViewButton(false, 2)}
      </Media>);

    return (
      <div
        className="App">
        {heading}
        <div>
          {onePlayerButton}
          {twoPlayersButton}
        </div>

        {this.state.redirect}
      </div>
    );
  }
}

export default App;
