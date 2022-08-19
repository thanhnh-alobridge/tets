import React from 'react';
import { FaCloud } from 'react-icons/fa';

import Layout from '@/components/layout/Layout';
import { colors } from '@constants/color';
import { useTranslation } from '@utils/i18n';
import { CustomButton } from '@/components/button';
import { Card } from '@/components/card';

import { BigCard, CardContainer } from './styled';

function TopPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <BigCard>
        <div className="d-flex justify-contents-between align-items-center flex-column">
          <div className="d-flex align-items-center pt-40">
            <FaCloud color={colors.primary} size={45} />
            <div className="app-name">{t('common.AppName')}</div>
          </div>
          <div className="pt-40 regular-font">{t('pages.top.welcomeTitle')}</div>
          <div className="pt-20 regular-font">{t('pages.top.pricing')}</div>
          <div className="d-flex pt-40 pb-40">
            <CustomButton>{t('common.register')}</CustomButton>
            <CustomButton className={`${window.innerWidth <= 750 ? 'ml-40' : 'ml-60'}`}>
              {t('common.login')}
            </CustomButton>
          </div>
        </div>
      </BigCard>

      <div className="pt-40">
        <div className="app-info">{t('pages.top.appInfo')}</div>
        <CardContainer className="d-flex card-container ">
          <Card
            title={t('pages.top.memberIntroductionFunc')}
            content="株式会社インプルは2022年3月9日(水)に札幌ドームで開催される「マイナビ就職EXPO」に出展いたします。"
          />
          <Card
            title={t('pages.top.verifyByIdCard')}
            content="株式会社インプルは2022年3月9日(水)に札幌ドームで開催される「マイナビ就職EXPO」に出展いたします。"
          />
        </CardContainer>
        <CardContainer className="d-flex card-container ">
          <Card
            title={t('pages.top.matchingInSameArea')}
            content="株式会社インプルは2022年3月9日(水)に札幌ドームで開催される「マイナビ就職EXPO」に出展いたします。"
          />
          <Card
            title={t('pages.top.calculateCompatibility')}
            content="株式会社インプルは2022年3月9日(水)に札幌ドームで開催される「マイナビ就職EXPO」に出展いたします。"
          />
        </CardContainer>
      </div>
    </Layout>
  );
}

export default React.memo(TopPage);
