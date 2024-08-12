import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PropTypes from "prop-types";

function ItemAction({ id, archived }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} />
      <ArchiveButton id={id} archived={archived} />
    </div>
  );
}

ItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ItemAction;
