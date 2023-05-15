import React from 'react';
import PropTypes from 'prop-types';
import { BtnBox, FeedBackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBox>
      {options.map(option => (
        <FeedBackBtn
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedBackBtn>
      ))}
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  key: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
