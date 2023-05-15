import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, FeedBackTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <FeedBackTitle>{title}</FeedBackTitle>
      {children}
    </SectionBox>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
};
