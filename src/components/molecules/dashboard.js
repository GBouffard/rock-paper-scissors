import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../atoms/stat';
import gameLogic from '../../services/game-logic';

const dashboardClass = 'dashboard';

const getPercentage = () => {
  const totalGames = gameLogic.wins.draws + gameLogic.wins.player1 + gameLogic.wins.player2;
  return totalGames === 0 ? 0 : parseFloat((gameLogic.wins.player1 / totalGames * 100).toFixed(2));
}

const Dashboard = (props) => (
  <div
    className={`${dashboardClass} ${props.className}`}>
    <div className={`${dashboardClass}__top-row`}>Your Statistics</div>

    <Stat
      className={`${dashboardClass}__span`}
      name="Wins"
      value={gameLogic.wins.player1} />

    <Stat
      className={`${dashboardClass}__span`}
      name="Draws"
      value={gameLogic.wins.draws} />

    <Stat
      className={`${dashboardClass}__span`}
      name="Losses"
      value={gameLogic.wins.player2} />

    <Stat
      className={`${dashboardClass}__span`}
      name="%"
      value={getPercentage()} />
  </div>
);

export default Dashboard;

Dashboard.propTypes = {
  className: PropTypes.string,
};