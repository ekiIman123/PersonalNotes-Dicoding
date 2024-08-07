import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ContentTitle({ title, id }) {
  return (
    <Link className="note-item__title" to={`/note/${id}`}>
      {title}
    </Link>
  );
}

ContentTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContentTitle;
