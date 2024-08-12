import React, { useContext } from "react";
import NotesList from "../components/NotesList";
import NotesInput from "../components/NotesInput";
import { NotesContext } from "../context/NotesContext";
import { LocaleContext } from "../context/LocaleContext";

export default function HomePage() {
  const { activeNotes } = useContext(NotesContext);
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <NotesInput />
      <h2>{locale === "en" ? "Active Notes" : "Catatan Aktif"} </h2>
      <br />
      <NotesList
        notes={activeNotes}
        caption={locale === "en" ? "active" : "aktif"}
      />
    </>
  );
}
