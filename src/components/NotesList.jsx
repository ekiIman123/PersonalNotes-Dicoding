import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/local-data";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/LocaleContext";

export default function NotesList({ notes, caption }) {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              date={showFormattedDate(note.createdAt)}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">
          {locale === "en"
            ? `No ${caption} notes.`
            : `Tidak ada Catatan ${caption}.`}
        </p>
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
  caption: PropTypes.string.isRequired,
};
