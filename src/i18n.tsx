import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Login": "Login",
      "Logout": "Logout",
      "English": "English",
      "Chinese": "Chinese",
      "USER ID": "USER ID",
      "Password": "Password",
    }
  },
  tw: {
    translation: {
      "Login": "登入",
      "Logout": "登出",
      "English": "英語",
      "Chinese": "繁體中文",
      "USER ID": "員工編號",
      "Password": "密碼",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;