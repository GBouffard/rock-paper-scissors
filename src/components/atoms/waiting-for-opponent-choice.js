import React from 'react';
import PropTypes from 'prop-types';

const WaitingForOpponentChoice = ({ children }) => (
  <div
    className="chosen-hand">
    {children}
  </div>
);

export default WaitingForOpponentChoice;

WaitingForOpponentChoice.propTypes = {
  children: PropTypes.node.isRequired
};