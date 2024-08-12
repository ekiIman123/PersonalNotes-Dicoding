import React, { useContext } from "react";
import NotesList from "../components/NotesList";
import { NotesContext } from "../context/NotesContext";
import { LocaleContext } from "../context/LocaleContext";
import LoadingIndicator from "../components/LoadingIndicator";

export default function ArchivedPage() {
  const { archivedNotes, isLoading } = useContext(NotesContext);
  const { locale } = useContext(LocaleContext);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <h2>{locale === "en" ? "Archived Notes" : "Catatan diarsipkan"}</h2>
          <br />
          <NotesList
            notes={archivedNotes}
            caption={locale === "en" ? "archive" : "arsip"}
          />
        </>
      )}
    </>
  );
}
