import styled from 'styled-components';

import { colors } from '@constants/color';

export const Text = styled.div`
  margin-top: 20px;
  font-family: NotoSansJPBold;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: 80%;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 55px 20px 60px 20px;

  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  .forgot-password-form {
    margin-top: 37px;
    margin-bottom: 20px;
  }
  .input {
    width: 350px;
    height: 50px;
    border-color: ${colors.disabled};
    border-width: 1px;
    border-style: solid;
    @media screen and (max-width: 750px) {
      width: 300px;
      height: 50px;
    }
  }
  @media screen and (max-width: 750px) {
    width: 340px;
    height: 330px;
  }
  .ant-form-item-label {
    display: flex;
    align-items: center;
  }
  .ant-form-item-label {
    margin-right: 37px;
  }
`;
