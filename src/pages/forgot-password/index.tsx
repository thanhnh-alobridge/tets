import { Form, Input } from 'antd';
import React from 'react';

import Layout from '@/components/layout/Layout';
import { CustomButton } from '@/components/button';
import { useTranslation } from '@utils/i18n';

import { Container } from './styled';

function ForgotPassWord() {
  const { t } = useTranslation('pages.forgotPassWord');

  return (
    <Layout>
      <Container>
        {/* <div className="div"> */}
        <div className="title">{t('.title')} </div>
        <Form className="forgot-password-form">
          <Form.Item label={t('.label')} className="label" colon={false}>
            <Input className="input" width={350} />
          </Form.Item>
        </Form>
        <CustomButton>{t('.send')}</CustomButton>
        {/* </div> */}
      </Container>
    </Layout>
  );
}
export default ForgotPassWord;
