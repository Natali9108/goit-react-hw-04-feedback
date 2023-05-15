import styled from '@emotion/styled';

export const BtnBox = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(3)};
  justify-content: center;
  align-items: center;
`;

export const FeedBackBtn = styled.button`
  padding: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(26)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid;
  border-radius: ${props => props.theme.spacing(3)};
  color: inherit;
  cursor: pointer;

  &:nth-of-type(1) {
    border-color: ${props => props.theme.colors.green};
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.white};
    }
  }

  &:nth-of-type(2) {
    border-color: ${props => props.theme.colors.blue};
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.blue};
      color: ${props => props.theme.colors.white};
    }
  }

  &:nth-of-type(3) {
    border-color: ${props => props.theme.colors.red};
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.white};
    }
  }
`;
