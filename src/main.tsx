import React from 'react'
import ReactDOM from "react-dom/client";

import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";

import { ApolloProvider } from "@apollo/client";

import App from "./App";
import { client } from "./api";

const enTranslations = {
  welcomeText: "Hey!! Welcome to the application",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </ApolloProvider>
  </React.StrictMode>
);
