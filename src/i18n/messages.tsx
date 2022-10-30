import config from "../config/config.json";
const localeLanguage = config.localeLanguages;

export const messages = {
  [localeLanguage.ENGLISH]: {
    contacts: "Contacts",
    search: "Search",
    avatar: "Avatar",
    fullName: "Full name",
    rowsPerPage: "Rows per page: "
  },
  [localeLanguage.POLISH]: {
    contacts: "Łączność",
    search: "Szukaj",
    avatar: "Awatara",
    fullName: "Pełne imię i nazwisko",
    rowsPerPage: "Wierszy na stronę: "
  }
};