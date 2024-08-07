import React from "react";
import PropTypes from "prop-types";

function ContentBody({ body }) {
  return <p className="note-item__body">{body}</p>;
}

ContentBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default ContentBody;
