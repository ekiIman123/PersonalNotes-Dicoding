import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/style.css";
import App from "./App";
import { NotesProvider } from "./context/NotesContext";
import { LocaleProvider } from "./context/LocaleContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NotesProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </NotesProvider>
  </BrowserRouter>
);
