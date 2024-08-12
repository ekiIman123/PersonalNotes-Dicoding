import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { NotesContext } from "../context/NotesContext";

export default function DetailPage() {
  const { activeNotes, archivedNotes } = useContext(NotesContext);

  const { id } = useParams();

  const note = [...activeNotes, ...archivedNotes].find(
    (note) => note.id === id
  );

  if (!note) return "Tidak ada catatan";

  return (
    <NoteDetail
      id={note.id}
      body={note.body}
      date={note.createdAt}
      title={note.title}
    />
  );
}
