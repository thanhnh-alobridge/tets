import styled from 'styled-components';

import { colors } from '@constants/color';

export const Container = styled.div`
  width: 700px;
  border-radius: 8px;
  padding: 55px 20px 60px 20px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: BIZUDGothicRegular;
  .title {
    font-family: BIZUDGothicBold;
  }
  .sent-via-email {
    margin-top: 37px;
  }
  .resend {
    margin-top: 20px;
  }
  .login-btn {
    margin-top: 37px;
  }
  @media screen and (max-width: 750px) {
    width: 340px;
  }
`;
