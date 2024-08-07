import React from "react";
import NotesList from "../components/NotesList";

export default function ArchivedPage({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>Archived Notes</h2>
      <NotesList
        notes={notes.filter((note) => note.archived)}
        caption={"archive"}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}
