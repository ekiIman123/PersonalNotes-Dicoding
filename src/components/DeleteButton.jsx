import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NotesContext } from "../context/NotesContext";
import { LocaleContext } from "../context/LocaleContext";

function DeleteButton({ id }) {
  const { onDeleteHandler } = useContext(NotesContext);
  const { locale } = useContext(LocaleContext);

  return (
    <button
      className="note-item__delete-button"
      onClick={() => onDeleteHandler(id)}
    >
      {locale === "en" ? "Delete" : "Hapus"}
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
