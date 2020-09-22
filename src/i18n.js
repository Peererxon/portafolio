import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from './shared/utils/i18n/en/index.json';
import es from './shared/utils/i18n/es/index.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {en,es},
    fallbackLng: 'es'
  });

export default i18n;
