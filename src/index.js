import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import OnePlayerGame from './components/one-player-game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={App}/>

      <Route
        exact
        path="/one-player-game"
        component={OnePlayerGame}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root')
);

registerServiceWorker();
