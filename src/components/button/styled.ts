import { Button } from 'antd';
import styled from 'styled-components';

import { colors } from '@constants/color';

import { Props } from './Button';

export const StyledButton = styled(Button)<Props>`
  border: none;
  box-shadow: none;
  min-height: 44px;
  padding: 9px 24px;
  background: ${(props) => (props.secondary ? colors.secondary : colors.primary)};
  :hover,
  :active,
  :focus,
  :visited {
    text-decoration: none;
    background: ${(props) => (props.secondary ? colors.secondary : colors.primary)};
    opacity: 0.7;
  }
  :disabled {
    background: ${colors.disabled} !important;
    color: ${colors.white} !important;
    border-color: ${colors.disabled} !important;
    text-shadow: none;
    box-shadow: none;
  }
  :disabled:hover {
    opacity: 1;
  }
  line-height: 1px;
  font-size: 16px;
`;
