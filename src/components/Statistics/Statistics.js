import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsText,
  StatisticsValue,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsText>
          Good: <StatisticsValue>{good}</StatisticsValue>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Neutral: <StatisticsValue>{neutral}</StatisticsValue>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Bad: <StatisticsValue>{bad}</StatisticsValue>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Total: <StatisticsValue>{total}</StatisticsValue>
        </StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Positive feedback:
          <StatisticsValue>{positivePercentage}</StatisticsValue>
        </StatisticsText>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
