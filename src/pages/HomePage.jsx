import React, { useState } from "react";
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
