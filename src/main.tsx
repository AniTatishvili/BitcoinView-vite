import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

//translation
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "./defaultTheme";

import App from "./App";
import "./index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/app">
      <QueryClientProvider client={client}>
        <ChakraProvider theme={defaultTheme}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
