import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from '../public/locales/en/translation.json';
import translationAR from '../public/locales/ar/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
    .use(initReactI18next)
    .use(detector)
    .init({
        resources,
        detector: {
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage']
        },
        fallbackLng: 'en',
        debug: false,
        react: {
        useSuspense: false
        },

        interpolation: {
        escapeValue: false // react already safes from xss
        }
    });

  export default i18n;