import React from "react";
import PropTypes from "prop-types";
import ContentTitle from "./ContentTitle";
import ContentDate from "./ContentDate";
import ContentBody from "./ContentBody";

function ItemContent({ id, title, date, body }) {
  return (
    <div className="note-item__content">
      <ContentTitle id={id} title={title} />
      <ContentDate date={date} />
      <ContentBody body={body} />
    </div>
  );
}

ItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ItemContent;
