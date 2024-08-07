import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <>
      {!archived ? (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Archive
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Unarchive
        </button>
      )}
    </>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
