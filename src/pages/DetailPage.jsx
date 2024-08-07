import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";

function DetailPage({ notes }) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

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

DetailPage.prototype = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default DetailPage;
