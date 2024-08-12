import React, { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import useInput from "../hooks/useInput";
import { LocaleContext } from "../context/LocaleContext";

export default function NotesInput() {
  const { locale } = useContext(LocaleContext);
  const { addNewNoteHandler } = useContext(NotesContext);

  const [title, onChangeTitle, resetTitle] = useInput("");

  const [noteBody, setNoteBody] = useState("");
  const [noteBodyLength, setNoteBodyLength] = useState(0);
  const [noteAlert, setNoteAlert] = useState(false);

  const onNoteBodyChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 50) {
      setNoteBody(inputText);
      setNoteBodyLength(inputText.length);
      setNoteAlert(false);
    } else {
      setNoteAlert(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (title && noteBody) {
      const newData = {
        id: `notes-${+new Date()}`,
        title: title,
        body: noteBody,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      const validNote = addNewNoteHandler(newData);

      if (validNote) {
        resetTitle();
        setNoteBody("");
        setNoteBodyLength(0);
        setNoteAlert(false);
      }
    } else {
      alert(
        locale === "en"
          ? "Please make sure the title and note body are filled and the character limit has not been exceeded."
          : "Pastikan judul dan isi catatan sudah terisi dan batas karakter belum terlampaui."
      );
    }
  };

  return (
    <div className="note-input">
      <h2>{locale === "en" ? "New Note" : "Catatan Baru"}</h2>
      <form onSubmit={onSubmit}>
        <p className="note-input__title__char-limit">
          {noteAlert
            ? locale === "en"
              ? "Maximum character limit has been reached"
              : "Batas karakter maksimum telah tercapai"
            : locale === "en"
            ? `Character left: ${50 - noteBodyLength}`
            : `Sisa karakter: ${50 - noteBodyLength}`}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder={
            locale === "en" ? "Type your title..." : "Tulis judul..."
          }
          required
          value={title}
          onChange={onChangeTitle}
        />
        <textarea
          className="note-input__body"
          placeholder={
            locale === "en" ? "Your note here..." : "Isi catatan di sini..."
          }
          required
          value={noteBody}
          onChange={onNoteBodyChange}
        />
        <button type="submit">{locale === "en" ? "Create" : "Buat"}</button>
      </form>
    </div>
  );
}
