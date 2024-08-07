import React, { useState } from "react";
import PropTypes from "prop-types";
import NotesList from "../components/NotesList";
import NotesInput from "../components/NotesInput";

export default function HomePage({
  notes,
  onSearch,
  addNewNote,
  onDelete,
  onArchive,
}) {
  return (
    <>
      <NotesInput addNewNote={addNewNote} />
      <h2>Active Notes</h2>
      <NotesList
        notes={notes.filter((note) => !note.archived)}
        caption={"active"}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}

HomePage.protoTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  addNewNote: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
