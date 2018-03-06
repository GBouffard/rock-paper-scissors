import React, { Component } from 'react';
import Button from './button';
import { Redirect } from 'react-router-dom';
import {
  language
} from '../constants/game-constants';

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
      <Button
        children={buttonChild}
        onClick={this.redirect} />
    );
  }
};