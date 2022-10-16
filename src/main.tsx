import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import "@shopify/polaris/build/esm/styles.css";

import { AppProvider } from "@shopify/polaris";

const enTranslations = {
  hey: "hey",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
