import React from 'react';
import { FaCloud } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import { colors } from '@constants/color';
import { useTranslation } from '@utils/i18n';

import { StyledHeader } from './styled';

function Header() {
  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });
  const { t } = useTranslation('common');

  return (
    <StyledHeader>
      <FaCloud color={colors.primary} size={isMobile ? 24 : 45} />
      <div className="app-name">{t('.AppName')}</div>
    </StyledHeader>
  );
}
export default Header;
