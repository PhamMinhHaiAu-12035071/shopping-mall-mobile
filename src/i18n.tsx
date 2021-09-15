import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const languages = ["vi", "en"];

i18n
  /*
                                                                                               load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
                                                                                               learn more: https://github.com/i18next/i18next-http-backend
                                                                                              */
  .use(Backend)
  /*
                                                                                               detect user language
                                                                                               learn more: https://github.com/i18next/i18next-browser-languageDetector
                                                                                              */
  .use(LanguageDetector)
  /*
                                                                                               pass the i18n instance to react-i18next.
                                                                                              */
  .use(initReactI18next)
  /*
                                                                                               init i18next
                                                                                               for all options read: https://www.i18next.com/overview/configuration-options
                                                                                              */
  .init({
    detection: {
      order: [
        "navigator",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    load: "languageOnly",
    lowerCaseLng: true,
    fallbackLng: "en", // use et if detected lng is not available
    saveMissing: true, // send not translated keys to endpoint
    debug: true,
    whitelist: languages,
    supportedLngs: languages,
    // backend: {
    //     // for all available options read the backend's repository readme file
    //     loadPath: '/locales/{{lng}}/{{ns}}.json'
    // },

    react: {
      wait: true,
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
