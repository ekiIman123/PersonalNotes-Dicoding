import React, { useState } from "react";

function NotesInput({ addNewNote }) {
  const [DataForm, setDataForm] = useState({
    title: "",
    noteBody: "",
    noteBodyLength: 0,
    noteAlert: false,
  });

  const onTitleChange = (event) => {
    event.preventDefault();
    setDataForm({
      ...DataForm,
      title: event.target.value,
    });
  };

  const onNoteBodyChange = (event) => {
    event.preventDefault();
    const inputText = event.target.value.slice(0, 50);
    setDataForm({
      ...DataForm,
      noteBody: inputText,
      noteBodyLength: inputText.length,
      noteAlert: inputText.length >= 50,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (DataForm.title && DataForm.noteBody) {
      const newData = {
        id: +new Date(),
        title: DataForm.title,
        body: DataForm.noteBody,
        archived: false,
        createdAt: new Date(),
      };

      const validNote = addNewNote(newData);

      if (validNote) {
        setDataForm({
          title: "",
          noteBody: "",
          noteBodyLength: 0,
          noteAlert: false,
        });
      }
    } else {
      alert(
        "Please make sure the title and note body are filled and the character limit has not been exceeded."
      );
    }
  };

  return (
    <div className="note-input">
      <h2>New Note</h2>
      <form>
        <p className="note-input__title__char-limit">
          {DataForm.noteAlert
            ? `Maximum character limit has been reached`
            : `Character left: ${50 - DataForm.noteBodyLength}`}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Type your title..."
          required
          value={DataForm.title}
          onChange={onTitleChange}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Your note here..."
          required
          value={DataForm.noteBody}
          onChange={onNoteBodyChange}
        ></textarea>
        <button type="submit" onClick={onSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default NotesInput;
