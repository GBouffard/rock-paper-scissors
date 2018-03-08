import React from 'react';
import PropTypes from 'prop-types';

const WaitingForPlayer = ({ children }) => (
  <div
    className="chosen-hand">
    {children}
  </div>
);

export default WaitingForPlayer;

WaitingForPlayer.propTypes = {
  children: PropTypes.node.isRequired
};