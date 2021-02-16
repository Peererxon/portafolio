import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './shared/utils/i18n/en/index.json';
import es from './shared/utils/i18n/es/index.json'

i18n
  .use( LanguageDetector )
  .use( initReactI18next )
  .init({
    resources: { en, es },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  } );
i18n.changeLanguage()

export default i18n;
