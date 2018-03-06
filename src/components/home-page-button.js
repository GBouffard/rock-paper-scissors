import React, { Component } from 'react';
import Button from './button';
import { Redirect } from 'react-router-dom';

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
    let buttonChild = "back to home page";

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