import { Pagination } from 'antd';
import styled from 'styled-components';

import { colors } from '@constants/color';

export const StyledPagination = styled(Pagination)`
  .prev-btn,
  .next-btn {
    text-align: center;
    background-color: #fff;
    border: 2px solid #d9d9d9;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s;
    color: ${colors.paginationTextColor};
    font-size: 16px;
    font-family: BIZUDGothicBold;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-pagination-item {
    color: ${colors.paginationTextColor};
    font-size: 16px;
    font-family: BIZUDGothicBold;
    width: 44px;
    height: 44px;
    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .ant-pagination-prev {
    width: 44px;
    height: 44px;
  }
  .ant-pagination-next {
    width: 44px;
    height: 44px;
  }
`;
