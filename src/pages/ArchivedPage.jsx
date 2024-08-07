import React from "react";
import PropTypes from "prop-types";
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

ArchivedPage.prototype = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
