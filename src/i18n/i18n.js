import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from './locales/es';
import enTranslations from './locales/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { // ----- ESPAÑOL -----
        translation: esTranslations
      },
      en: { //----- INGLÉS -----
        translation: enTranslations
      }
    },
    lng: navigator.language.startsWith('es') ? 'es' : 'en', // idioma inicial
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;