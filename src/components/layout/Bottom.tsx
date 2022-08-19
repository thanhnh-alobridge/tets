import React from 'react';

import { useTranslation } from '@utils/i18n';

import { StyledBottom } from './styled';

function Bottom() {
  const { t } = useTranslation('common');
  return (
    <StyledBottom>
      <div className="bottom-item-container d-flex justify-content-evenly">
        <div className="bottom-item">{t('.operationExplanation')}</div>
        <div className="bottom-item">{t('.companyProfile')}</div>
        <div className="bottom-item">{t('.term')}</div>
        {/* <div className="bottom-item">{t('.guildeLine')}</div> */}
        <div className="bottom-item">{t('.privacyPolicy')}</div>
        <div className="bottom-item">{t('.law')}</div>
        <div className="bottom-item">{t('.inquiry')}</div>
        <div className="bottom-item">{t('.FAQ')}</div>
      </div>
      <div className="coppy-right">{t('.coppyRight')}</div>
    </StyledBottom>
  );
}

export default React.memo(Bottom);
