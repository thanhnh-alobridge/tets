import React from 'react';

import { StyledCard } from './styled';

interface Props {
  title: string;
  content: string;
}

function Card({ content, title }: Props) {
  return (
    <StyledCard>
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </StyledCard>
  );
}
export default React.memo(Card);
