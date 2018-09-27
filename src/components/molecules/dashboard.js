import React from 'react';
import PropTypes from 'prop-types';

const dashboardClass = 'dashboard';

const Dashboard = (props) => (
  <div
    className={`${dashboardClass} ${props.className}`}>
    {props.children}
  </div>
);

export default Dashboard;

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};