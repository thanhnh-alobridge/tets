import styled from 'styled-components';

import { colors } from '@constants/color';

export const RegisterContainer = styled.div`
  color: ${colors.textColor};
  background: ${colors.white};
  width: 700px;
  padding: 57px 68px 60px 68px;
  font-family: BIZUDGothicRegular;
  .register-title {
    font-family: BIZUDGothicBold;
    margin-bottom: 32px;
  }
  .select-w100 {
    width: 100px;
  }
  .select-w80 {
    width: 80px;
  }
  .item-no-mb {
    margin-bottom: 0px !important ;
  }
  .item-id {
    margin-bottom: 33px;
  }
  .item-email {
    margin-bottom: 23px;
  }
  .password-valid {
    margin-bottom: 20px;
  }
  .check-term {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .input-name {
    width: 160px;
  }
  .input-cellphone {
    width: 173px;
  }
  .w-138 {
    width: 138px;
  }
  .w-263 {
    width: 263px;
  }
  .select-w160 {
    width: 160px;
  }
  .input-w350 {
    width: 350px;
  }
  .left-5 {
    margin-left: 3px;
  }
  .ant-form-item-label > label {
    color: ${colors.textColor};
  }

  @media screen and (max-width: 750px) {
    width: 340px;
    min-width: 340px;
    padding: 35px 20px 60px 20px;
    .input-name {
      width: 140px;
    }
    .input-cellphone {
      width: 300px;
    }
    .input-w350 {
      width: 300px;
    }
    .w-263 {
      width: 214px;
    }
    .check-term {
      text-align: left;
    }
    .select-area {
      flex-direction: column;
    }
    .select-w160 {
      width: 300px;
    }
    .left-5 {
      margin-left: 0px;
    }
  }
`;
