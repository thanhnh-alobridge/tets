import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import jaTranslation from './translations/ja.json';
// import enTranslation from './translations/en.json'

i18n.use(initReactI18next).init({
  resources: {
    ja: {
      translation: jaTranslation,
    },
  },

  fallbackLng: 'ja',
  lng: 'ja',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
