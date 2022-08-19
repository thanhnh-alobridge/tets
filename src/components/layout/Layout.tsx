import { Content } from 'antd/lib/layout/layout';
import React from 'react';

import Bottom from './Bottom';
import Header from './Header';
import { StyledLayout } from './styled';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <StyledLayout>
      <Header />
      <Content className="content">{props.children}</Content>
      <Bottom />
    </StyledLayout>
  );
}

export default React.memo(Layout);
