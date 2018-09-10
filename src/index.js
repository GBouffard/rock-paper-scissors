import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';
import App from './App';
import OnePlayerGame from './components/organisms/one-player-game';
import TwoPlayersGame from './components/organisms/two-players-game';
import registerServiceWorker from './registerServiceWorker';
import { baseUrl } from './constants/game-constants';

ReactDOM.render((
  <BrowserRouter basename={baseUrl}>
    <Switch>
      <Route
        exact
        path="/"
        component={App} />

      <Route
        exact
        path="/one-player-game"
        component={OnePlayerGame} />

      <Route
        exact
        path="/two-players-game"
        component={TwoPlayersGame} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root')
);

registerServiceWorker();
