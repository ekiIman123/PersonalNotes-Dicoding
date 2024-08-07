import React from "react";
import PropTypes from "prop-types";

function ContentDate({ date }) {
  return <p className="note-item__date">{date}</p>;
}

ContentDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ContentDate;
