import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { NotesContext } from "../context/NotesContext";
import LoadingIndicator from "../components/LoadingIndicator";
import { LocaleContext } from "../context/LocaleContext";

export default function DetailPage() {
  const { activeNotes, archivedNotes, isLoading } = useContext(NotesContext);
  const { locale } = useContext(LocaleContext);

  const { id } = useParams();
  const note = [...activeNotes, ...archivedNotes].find(
    (note) => note.id === id
  );

  if (!note) return locale === "en" ? "Haven't notes" : "Tidak ada catatan";

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <NoteDetail
          id={note.id}
          body={note.body}
          date={note.createdAt}
          title={note.title}
        />
      )}
    </>
  );
}
