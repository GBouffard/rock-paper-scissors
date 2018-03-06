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

        <ImageButton
          url={urls.onePlayerGame}
          className="App__type-game-button"
          onClick={() =>{}} />

        <ImageButton
          url={urls.twoPlayersGame}
          className="App__type-game-button"
          onClick={() =>{}} />

      </div>
    );
  }
}

export default App;
