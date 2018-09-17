import React, { Component } from 'react';
import Media from 'react-media';
import { Redirect } from 'react-router-dom';
import Button from './button';
import {
  language
} from '../../constants/game-constants';

const homePageRedirectElement = (
  <Redirect
    to={'/'} />
);

export default class HomePageButton extends Component {
  constructor() {
    super();
    this.redirect = this.redirect.bind(this);
    this.state = {
      backToHome: false
    }
  }

  redirect() {
    this.setState({
      backToHome: true
    })
  }

  render() {
    let buttonChild = language.backToHomePage;

    if (this.state.backToHome) {
      buttonChild = homePageRedirectElement;
    }

    return (
      <Media query="(max-width: 640px)">
        {isMobile =>
          <Button
            children={buttonChild}
            className={`home-page-button ${isMobile ? "home-page-button--mobile" : null}`}
            onClick={this.redirect} />
        }
      </Media>
    );
  }
};