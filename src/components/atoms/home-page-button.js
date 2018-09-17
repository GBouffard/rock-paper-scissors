import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Media from 'react-media';
import Button from './button';
import {
  language
} from '../../constants/game-constants';

const redirectToHomepage = (
  <Redirect
    to={'/'} />
);

export default class HomePageButton extends Component {
  constructor() {
    super();
    this.redirect = this.redirect.bind(this);
    this.state = {
      isClicked: false
    }
  }

  redirect() {
    this.setState({
      isClicked: true
    })
  }

  render() {
    const buttonChild = this.state.isClicked ? redirectToHomepage : language.backToHomePage;

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