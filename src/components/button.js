import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={props.className}>
    {props.text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};