import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LocaleContext } from "./context/LocaleContext";
import { NotesContext } from "./context/NotesContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import ArchivedPage from "./pages/ArchivedPage";
import RegisterPage from "./pages/RegisterPage";
import Navigation from "./components/Navigation";

const App = () => {
  const { authedUser } = useContext(NotesContext);
  const { locale } = useContext(LocaleContext);

  console.log(authedUser);

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>{locale === "en" ? "Notes App" : "Aplikasi Catatan"}</h1>
        {authedUser && <Navigation />}
      </header>
      <main>
        <Routes>
          {!authedUser ? (
            <>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/regist" element={<RegisterPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/archived" element={<ArchivedPage />} />
              <Route path="/note/:id" element={<DetailPage />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
};

export default App;
