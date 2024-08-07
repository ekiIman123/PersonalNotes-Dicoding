import React from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import NoteDetail from "../components/NoteDetail";

function DetailPage({ notes }) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  console.log(note);

  return (
    <NoteDetail
      id={note.id}
      body={note.body}
      createdAt={showFormattedDate(note.createdAt)}
      title={note.title}
    />
  );
}

export default DetailPage;
