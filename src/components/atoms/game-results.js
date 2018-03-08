import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GameResults = ({ children, className }) => {
  const mainClassName = classNames('results', className);

  return (
    <div
      className={mainClassName}>
      {children}
    </div>
  );
};

export default GameResults;

GameResults.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};