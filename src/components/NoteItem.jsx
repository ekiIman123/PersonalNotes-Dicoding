import React from "react";
import ItemContent from "./ItemContent";
import ItemAction from "./ItemAction";
import PropTypes, { bool } from "prop-types";

export default function NoteItem({ title, body, date, id, archived }) {
  return (
    <div className="note-item">
      <ItemContent id={id} title={title} body={body} date={date} />
      <ItemAction id={id} archived={archived} />
    </div>
  );
}

NoteItem.protoTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  archived: bool.isRequired,
};
