import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import styled from 'styled-components';

import { colors } from '@constants/color';

export const StyledHeader = styled.div`
  height: 80px;
  @media screen and (max-width: 750px) {
    height: 40px;
    justify-content: center;
    padding-left: 0px;
  }
  background: ${colors.white};
  display: flex;
  align-items: center;
  padding-left: 36px;
  .app-name {
    font-family: BIZUDGothicBold;
    font-size: 32px;
    margin-left: 0.5em;
    @media screen and (max-width: 750px) {
      font-size: 16px;
    }
  }
`;

export const StyledBottom = styled(Footer)`
  display: flex;
  padding: 60px 60px 20px 60px;
  justify-content: space-between;
  background: ${colors.background};
  .bottom-item {
    margin-left: 13px;
    margin-right: 27px;
    font-family: BIZUDGothicRegular;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    word-break: keep-all;
    white-space: nowrap;
  }
  .bottom-item-container {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  }
  .coppy-right {
    font-family: BIZUDGothicRegular;
    font-size: 14px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 750px) {
      font-size: 12px;
      letter-spacing: 0.1px;
      padding-top: 40px;
    }
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
    padding: 60px 40px 20px 40px;
  }
`;

export const StyledContent = styled.div`
  height: calc(100% - 42px);
`;

export const StyledLayout = styled(Layout)`
  background: ${colors.white};
  @media screen and (max-width: 750px) {
    letter-spacing: 0.1px;
  }
  .ant-layout-content {
    display: flex;
    align-items: center;
    padding-top: 40px;
    flex-direction: column;
    min-height: calc(100vh - 185px);
    justify-content: center;
    background: ${colors.background};
  }
  .pt-40 {
    padding-top: 40px;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .pb-20 {
    padding-bottom: 20px;
  }
  .pb-40 {
    padding-bottom: 40px;
  }
  .pl-60 {
    padding-left: 60px;
  }
  .pl-40 {
    padding-left: 40px;
  }
  .ml-60 {
    margin-left: 60px;
  }
  .ml-40 {
    margin-left: 40px;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mr-20 {
    margin-right: 20px;
  }
  .mr-30 {
    margin-right: 30px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .app-info {
    font-size: 20px;
  }
  .text-regular {
    font-family: BIZUDGothicRegular;
  }
  .text-medium {
    font-family: BIZUDGothicBold;
  }
  .ant-checkbox-inner {
    border-radius: 2px;
  }
  .ant-input {
    border-width: 1px;
  }
  .ant-checkbox-inner {
    border-width: 1px;
    background: ${colors.white};
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-width: 1px;
  }
  .text-underline {
    text-decoration: underline;
    cursor: pointer;
  }
  .ant-form-item {
    margin-bottom: 20px;
  }
  .ant-input {
    height: 50px;
    background: ${colors.white};
  }
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
    height: 50px;
    align-items: center;
    background: ${colors.white};
  }
`;
