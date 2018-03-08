import React from 'react';
import PropTypes from 'prop-types';

const GameResults = ({ children }) => (
  <div
    className="results">
    {children}
  </div>
);

export default GameResults;

GameResults.propTypes = {
  children: PropTypes.node.isRequired
};