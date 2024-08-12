import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NotesContext } from "../context/NotesContext";
import { LocaleContext } from "../context/LocaleContext";

function ArchiveButton({ id, archived }) {
  const { locale } = useContext(LocaleContext);
  const { onArchiveHandler } = useContext(NotesContext);

  return (
    <>
      {!archived ? (
        <button
          className="note-item__archive-button"
          onClick={() => onArchiveHandler(id)}
        >
          {locale === "en" ? "Archive" : "Arsipkan"}
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => onArchiveHandler(id)}
        >
          {locale === "en" ? "Unarchive" : "Tidak diarsipkan"}
        </button>
      )}
    </>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
