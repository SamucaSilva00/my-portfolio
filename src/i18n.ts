import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./lang/pt.json";
import en from "./lang/en.json";

const supportedLngs = ["pt", "en"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    supportedLngs,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"], 
      caches: ["localStorage"],
    },
  });

export default i18n;