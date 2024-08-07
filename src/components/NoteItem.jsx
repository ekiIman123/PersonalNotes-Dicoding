import React from "react";
import ItemContent from "./ItemContent";
import ItemAction from "./ItemAction";
import PropTypes, { bool } from "prop-types";

function NoteItem({ title, body, date, id, onDelete, archived, onArchive }) {
  return (
    <div className="note-item">
      <ItemContent id={id} title={title} body={body} date={date} />
      <ItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

NoteItem.prototype = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: bool,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
