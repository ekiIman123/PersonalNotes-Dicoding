import React, { useContext } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/local-data";
import { LocaleContext } from "../context/LocaleContext";

export default function NoteDetail({ title, body, date }) {
  const { locale } = useContext(LocaleContext);

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
            {locale === "en" ? "Back" : "Kembali"}
          </button>
        </div>
      </div>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
