import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl'
import { messages } from './i18n/messages';
import config from "./config/config.json";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const locale = config.locale;
const localeLanguage = config.localeLanguages.ENGLISH;

root.render(
  <React.StrictMode>
    <IntlProvider 
        messages={messages[localeLanguage]}
        locale={locale}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
