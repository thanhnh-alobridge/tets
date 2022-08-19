/* eslint-disable react/destructuring-assignment */
import { ButtonProps } from 'antd';
import React from 'react';

import { StyledButton } from './styled';

export interface Props extends ButtonProps {
  secondary?: boolean;
}

function CustomButton(props: Props) {
  return (
    <StyledButton {...props} type="primary" secondary={props.secondary}>
      {props.children}
    </StyledButton>
  );
}
export default CustomButton;
