import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ja from './locales/ja.json';

const supportedLngs = {
  ja: '日本語',
  en: 'English',
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // lng: 'en', // デバッグ用。指定したら強制的にその言語を使用することになる。
    fallbackLng: 'ja',
    returnEmptyString: false,
    supportedLngs: Object.keys(supportedLngs),
    resources: {
      ja: {
        translation: ja,
      },
      en: {
        translation: en,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
