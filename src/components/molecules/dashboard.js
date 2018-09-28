import React from 'react';
import PropTypes from 'prop-types';

const dashboardClass = 'dashboard';

const Dashboard = (props) => (
  <div
    className={`${dashboardClass} ${props.className}`}>
    <div className={`${dashboardClass}__top-row`}>Your Statistics</div>

    <span>
      <div>Wins</div>
      <div>1</div>
    </span>

    <span>
      <div>Draws</div>
      <div>2</div>
    </span>

    <span>
      <div>Losses</div>
      <div>3</div>
    </span>

    <span>
      <div>Winning percentage</div>
      <div>%</div>
    </span>
  </div>
);

export default Dashboard;

Dashboard.propTypes = {
  className: PropTypes.string,
};