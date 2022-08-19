/* eslint-disable no-plusplus */
import { Checkbox, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { CustomButton } from '@/components/button';
import Layout from '@/components/layout/Layout';
import { cities } from '@constants/city';
import { days, months, years } from '@utils/date';
import { useTranslation } from '@utils/i18n';

import { RegisterContainer } from './styled';

const { Item, useForm } = Form;
const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 14 },
};
const { Option } = Select;

function RegisterPage() {
  const [form] = useForm();
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });
  const today = new Date();
  const initialValues = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
  return (
    <Layout>
      <RegisterContainer>
        <div className="register-title text-center">新規アカウント登録</div>
        <Form
          initialValues={initialValues}
          {...layout}
          layout={isMobile ? 'vertical' : 'horizontal'}
          labelAlign="left"
          form={form}
          colon={false}
        >
          <Item label={t('pages.register.email')} name="email" className="item-email">
            <div>email@mariene.com</div>
          </Item>

          <Item label={t('pages.register.id')} name="email" className="item-id">
            <div>797cc11e-3f3b-4e07-81fd-6ba50fcafa4f</div>
          </Item>

          <Item label={t('pages.register.fullName')} className="item-no-mb">
            <div className="d-flex">
              <Item rules={[{ required: true }]} className={isMobile ? 'mr-20' : 'mr-30'} name="surname">
                <Input className="input-name" size="large" placeholder="姓" />
              </Item>
              <Item rules={[{ required: true }]} name="name">
                <Input className="input-name" size="large" placeholder="名" />
              </Item>
            </div>
          </Item>

          <Item label={t('pages.register.kanaName')}>
            <div className="d-flex">
              <Item rules={[{ required: true }]} className={isMobile ? 'mr-20' : 'mr-30'} name="kanaSurname">
                <Input className="input-name" size="large" placeholder="せい" />
              </Item>
              <Item rules={[{ required: true }]} name="kanaName">
                <Input className="input-name" size="large" placeholder="めい" />
              </Item>
            </div>
          </Item>

          <Item label={t('pages.register.birthDay')}>
            <div className="d-flex">
              <Item name="year" className="mr-20">
                <Select dropdownStyle={{ fontFamily: 'BIZUDGothicRegular' }} className="select-w100" size="large">
                  {years().map((item) => (
                    <Option key={item} value={item.toString()}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Item>
              <Item name="month" className="mr-20">
                <Select dropdownStyle={{ fontFamily: 'BIZUDGothicRegular' }} className="select-w80" size="large">
                  {months().map((item) => (
                    <Option key={item} value={item.toString()}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Item>
              <Item name="day">
                <Select dropdownStyle={{ fontFamily: 'BIZUDGothicRegular' }} className="select-w80" size="large">
                  {days().map((item) => (
                    <Option key={item} value={item.toString()}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Item>
            </div>
          </Item>

          <Item label={t('pages.register.phone')}>
            <div className="d-flex">
              <Item>
                <Input className="input-cellphone" size="large" placeholder="せい" />
              </Item>
            </div>
          </Item>
        </Form>

        {/* <Form layout="horizontal" colon={false} {...layout}> */}
        <Row gutter={[24, 24]}>
          <Col span={isMobile ? 24 : 9}>
            <div>{t('pages.register.address')}</div>
          </Col>
          <Col span={isMobile ? 24 : 15}>
            <Form form={form} colon={false} labelAlign="left" layout="horizontal" key="horizontalform">
              <Row>
                <Col span={isMobile ? 6 : 5}>
                  <div className="pt-1">{t('pages.register.postCode')}</div>
                </Col>
                <Col>
                  <Item>
                    <Input className="w-138 left-5" size="large" placeholder="せい" />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={isMobile ? 6 : 5}>
                  <div className="pt-1">{t('pages.register.prefectures')}</div>
                </Col>
                <Col>
                  <Item>
                    <Select
                      dropdownStyle={{ fontFamily: 'BIZUDGothicRegular' }}
                      className="w-138 left-5"
                      size="large"
                      placeholder="せい"
                    >
                      {cities.map((item) => (
                        <Option>{item.label}</Option>
                      ))}
                    </Select>
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={isMobile ? 6 : 5}>
                  <div className="pt-1">{t('pages.register.municipalities')}</div>
                </Col>
                <Col>
                  <Item>
                    <Input className="w-263 left-5" size="large" placeholder="せい" />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={isMobile ? 6 : 5}>
                  <div className="pt-1">{t('pages.register.townArea')}</div>
                </Col>
                <Col>
                  <Item>
                    <Input className="w-263 left-5" size="large" placeholder="せい" />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={isMobile ? 6 : 5}>
                  <div className="pt-1">{t('pages.register.chomeAdess')}</div>
                </Col>
                <Col>
                  <Item>
                    <Input className="w-263 left-5" size="large" placeholder="せい" />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={isMobile ? 6 : 5}>
                  <div className="pt-1">{t('pages.register.building')}</div>
                </Col>
                <Col>
                  <Item>
                    <Input className="w-263 left-5" size="large" placeholder="せい" />
                  </Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Form {...layout} colon={false} labelAlign="left" form={form} layout={isMobile ? 'vertical' : 'horizontal'}>
          <Item label={t('pages.register.residentialArea')}>
            <div className="d-flex select-area">
              <Item className={isMobile ? 'mr-20' : 'mr-30'}>
                <Select dropdownStyle={{ fontFamily: 'BIZUDGothicRegular' }} size="large" className="select-w160" />
              </Item>
              <Item>
                <Select dropdownStyle={{ fontFamily: 'BIZUDGothicRegular' }} size="large" className="select-w160" />
              </Item>
            </div>
          </Item>

          <Item label={t('pages.register.password')} className="item-no-mb">
            <div className={`d-flex ${isMobile ? 'flex-column' : ''}`}>
              <Item>
                <Input className="input-w350" size="large" placeholder="せい" />
              </Item>
            </div>
          </Item>
          <div className="password-valid">{t('pages.register.validPass')}</div>
          <Item label={t('pages.register.confirmPassword')}>
            <div className={`d-flex ${isMobile ? 'flex-column' : ''}`}>
              <Item>
                <Input size="large" className="input-w350" placeholder="せい" />
              </Item>
            </div>
          </Item>
          <div className={isMobile ? 'text-left' : 'text-center'}>
            {t('pages.register.warningCannotChangedAfterRegister')}
          </div>
          <div className="check-term">
            <Checkbox>
              <span className="text-underline">{t('common.term')}</span>
              {t('common.and')}
              <span className="text-underline">{t('common.privacyPolicy')}</span>
              {t('common.agree')}
            </Checkbox>
          </div>
          <div className="text-center">
            <CustomButton>{t('pages.register.registerBtn')}</CustomButton>
          </div>
        </Form>
      </RegisterContainer>
    </Layout>
  );
}
export default React.memo(RegisterPage);
