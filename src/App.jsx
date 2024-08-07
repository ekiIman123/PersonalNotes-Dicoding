import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ArchivedPage from "./pages/ArchivedPage";
import Navigation from "./components/Navigation";
import { getInitialData } from "./utils";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [unfilteredNotes, setUnfilteredNotes] = useState(getInitialData());

  const onSearchHandler = (keyword) => {
    const filteredNotes = unfilteredNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    setNotes(filteredNotes);
  };

  const addNewNoteHandler = (newDataNote) => {
    try {
      setNotes((prevState) => [...prevState, newDataNote]);
      setUnfilteredNotes((prevState) => [...prevState, newDataNote]);
      return {
        error: false,
        message: "Success!",
      };
    } catch (error) {
      return {
        error: true,
        message: "Failed!",
      };
    }
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setUnfilteredNotes(updatedNotes);
  };

  const onArchiveHandler = (id) => {
    setNotes((prevState) =>
      prevState.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
    setUnfilteredNotes((prevState) =>
      prevState.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const onDetailHandler = (id) => {
    const note = notes.find((note) => note.id === id);
    return note || null;
  };

  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                notes={notes}
                onSearch={onSearchHandler}
                addNewNote={addNewNoteHandler}
                onDelete={onDeleteHandler}
                onArchive={onArchiveHandler}
              />
            }
          />
          <Route path="/archived" element={<ArchivedPage notes={notes} />} />
          <Route path="/note/:id" element={<DetailPage notes={notes} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
