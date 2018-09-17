import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={props.className}
    aria-label={props.ariaLabel}>
    {props.children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
};