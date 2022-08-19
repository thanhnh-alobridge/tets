import styled from 'styled-components';

import { colors } from '@constants/color';

export const StyledCard = styled.div`
  border-radius: 8px;
  word-wrap: break-word;
  width: 340px;
  background: ${colors.white};
  @media screen and (min-width: 750px) {
    margin-right: 20px;
  }
  margin-top: 20px;
  padding: 20px 24px 20px 24px;
  .card-title {
    font-size: 16px;
  }
  .card-content {
    padding-top: 17px;
    font-family: BIZUDGothicRegular;
  }
`;
