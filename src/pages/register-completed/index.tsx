import React from 'react';

import { CustomButton } from '@/components/button';
import Layout from '@/components/layout/Layout';
import { useTranslation } from '@utils/i18n';

import { Container } from './styled';

function RegisterCompletedPage() {
  const { t } = useTranslation('pages.registerCompleted');
  return (
    <Layout>
      <Container>
        <div className="title">{t('.title')}</div>
        <div className="sent-via-email">{t('.sentViaEmail')}</div>
        <div className="resend">
          {t('.notReceived')}
          <span className="text-underline">{t('.here')}</span>
          {t('.contactUs')}
        </div>
        <CustomButton className="login-btn">{t('.login')}</CustomButton>
      </Container>
    </Layout>
  );
}
export default React.memo(RegisterCompletedPage);
