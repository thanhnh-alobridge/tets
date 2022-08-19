import { PaginationProps } from 'antd';
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { colors } from '@constants/color';

import { StyledPagination } from './styled';

function itemRender(current: number, type: string, originalElement: React.ReactNode) {
  if (type === 'prev') {
    return (
      <div className="prev-btn">
        <IoIosArrowBack color={colors.paginationTextColor} />
      </div>
    );
  }
  if (type === 'next') {
    return (
      <div className="next-btn">
        <IoIosArrowForward color={colors.paginationTextColor} />
      </div>
    );
  }
  return originalElement;
}

function CustomPagination(props: PaginationProps) {
  return <StyledPagination itemRender={itemRender} {...props} />;
}
export default React.memo(CustomPagination);
