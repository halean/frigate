// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import vi from './locales/vi/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: 'vi', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export default i18n;
