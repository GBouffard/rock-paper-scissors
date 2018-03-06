import React from 'react';
import PropTypes from 'prop-types';
import {
  language
} from '../constants/game-constants';

export default function GameResultsSection({results}) {
  return (
        <section>
          <h2>
            {language.results}
          </h2>
          {results}
        </section>
  );
}

GameResultsSection.propTypes = {
  results: PropTypes.string
};