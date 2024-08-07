import React from "react";
import { Link } from "react-router-dom";

function ContentTitle({ title, id }) {
  return (
    <Link className="note-item__title" to={`/note/${id}`}>
      {title}
    </Link>
  );
}

export default ContentTitle;
