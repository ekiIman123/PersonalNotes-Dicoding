import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/style.css";
import App from "./App";
import { NotesProvider } from "./context/NotesContext";
import { LocaleProvider } from "./context/LocaleContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NotesProvider>
      <LocaleProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LocaleProvider>
    </NotesProvider>
  </BrowserRouter>
);
