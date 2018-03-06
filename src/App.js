import React, { Component } from 'react';
import ImageButton from './components/image-button';
import {
  language,
  urls
} from './constants/game-constants';
import './App.css';

class App extends Component {
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
            onClick={() =>{}} />

          <ImageButton
            url={urls.twoPlayersGame}
            className="App__type-game-button"
            onClick={() =>{}} />
        </div>

      </div>
    );
  }
}

export default App;
