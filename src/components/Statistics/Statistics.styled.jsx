import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  text-align: center;
`;

export const StatisticsText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
  letter-spacing: 0.01em;
`;

export const StatisticsValue = styled.span`
  font-weight: 700;
`;
