import styled from 'styled-components';

import { colors } from '@constants/color';

export const CardContainer = styled.div`
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
export const BigCard = styled.div`
  border-radius: 8px;
  word-wrap: break-word;
  width: 340px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  background: ${colors.white};
  @media screen and (min-width: 750px) {
    margin-right: 20px;
    width: 700px;
  }
  .app-name {
    margin-left: 0.5em;
    font-size: 32px;
    font-family: BIZUDGothicBold;
  }

  .regular-font {
    font-family: BIZUDGothicRegular;
  }
`;
