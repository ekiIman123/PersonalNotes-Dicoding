import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils";

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

export default NotesList;
