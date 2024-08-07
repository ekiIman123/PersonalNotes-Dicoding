import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/local-data";
import PropTypes from "prop-types";

function NotesList({ notes, caption, onDelete, onArchive }) {
  return (
    <>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              date={showFormattedDate(note.createdAt)}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">No {caption} notes.</p>
      )}
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  caption: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
