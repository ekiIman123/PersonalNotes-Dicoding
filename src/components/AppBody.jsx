import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArchivedPage from "../pages/ArchivedPage";
import DetailPage from "../pages/DetailPage";

function AppBody({ notes, addNewNote, onDelete, onArchive, onDetailHandler }) {
  return (
    <div className="note-app__body">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              addNewNote={addNewNote}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          }
        />
        <Route
          path="/note/:id"
          element={<DetailPage onDetailHandler={onDetailHandler} />}
        />
        <Route
          path="/archived"
          element={
            <ArchivedPage
              notes={notes}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default AppBody;
