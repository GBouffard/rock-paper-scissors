import React from 'react';
import PropTypes from 'prop-types';

const Stat = (props) => (
  <span className={props.className}>
    <div>{props.name}</div>
    <div>{props.value}</div>
  </span>
);

export default Stat;

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  className: PropTypes.string
};