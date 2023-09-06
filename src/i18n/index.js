import i18next from 'i18next';
import translationsInEng from '../locales/en/translateEN.json';
import translationsInEs from '../locales/es/translateES.json';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
    en: {
      translation: translationsInEng
    },
    es: {
      translation: translationsInEs
    },
};

i18next

  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
      resources, // resources are important to load translations for the languages.
      lng: "es", // It acts as default language. When the site loads, content is shown in this language.  
      debug: true,
      fallbackLng: "en", // use de if selected language is not available
      interpolation: {
          escapeValue: false
      },
      ns: "translation", // namespaces help to divide huge translations into multiple small files.
      defaultNS: "translation"
  });

export default i18next;