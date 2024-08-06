import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/providers/store";

//translation
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import App from "./app/App";
import "./app/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
