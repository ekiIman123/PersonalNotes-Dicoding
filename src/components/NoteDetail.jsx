import React, { useContext } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/local-data";
import { LocaleContext } from "../context/LocaleContext";

export default function NoteDetail({ title, body, date }) {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <div className={"note-detail"}>
        <div className={"note-detail__content"}>
          <h5 className={"note-detail__title"}>{title}</h5>
          <p className={"note-detail__date"}>{showFormattedDate(date)}</p>
          <p className={"note-detail__body"}>{body}</p>
          <button
            onClick={() => window.history.back()}
            className={"note-detail__back-button"}
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
