import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../atoms/stat';

const dashboardClass = 'dashboard';

const Dashboard = (props) => (
  <div
    className={`${dashboardClass} ${props.className}`}>
    <div className={`${dashboardClass}__top-row`}>Your Statistics</div>

    <Stat
      className={`${dashboardClass}__span`}
      name="Wins"
      value={0} />

    <Stat
      className={`${dashboardClass}__span`}
      name="Draws"
      value={0} />

    <Stat
      className={`${dashboardClass}__span`}
      name="Losses"
      value={0} />

    <Stat
      className={`${dashboardClass}__span`}
      name="%"
      value={0} />
  </div>
);

export default Dashboard;

Dashboard.propTypes = {
  className: PropTypes.string,
};