import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ImageButton from './components/image-button';
import {
  language,
  urls
} from './constants/game-constants';
import './css/App.css';

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
    return (
      <div
        className="App">

        <h1
          className="App__intro-heading">
          {language.gameType}
        </h1>

        <div>
          <ImageButton
            url={urls.onePlayerGame}
            className="App__type-game-button"
            onClick={this.playOnePlayerGame} />

          <ImageButton
            url={urls.twoPlayersGame}
            className="App__type-game-button"
            onClick={this.playTwoPlayersGame} />
        </div>

        {this.state.redirect}
      </div>
    );
  }
}

export default App;
