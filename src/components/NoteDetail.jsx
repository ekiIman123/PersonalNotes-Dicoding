import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/local-data";

export default function NoteDetail({ id, title, body, date }) {
  return (
    <>
      <div className={"card container-fluid"}>
        <div className={"card-body"}>
          <h5 className={"card-title"}>{title}</h5>
          <p className={"card-text"}>{showFormattedDate(date)}</p>
          <p className={"card-text"}>{body}</p>
          <button
            onClick={() => window.history.back()}
            className={"btn btn-primary"}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
