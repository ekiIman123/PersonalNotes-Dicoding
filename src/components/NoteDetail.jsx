import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteDetail({ id, title, body, createdAt }) {
  return (
    <>
      <div className={"card container-fluid"}>
        <div className={"card-body"}>
          <h5 className={"card-title"}>{title}</h5>
          <p className={"card-text"}>{showFormattedDate(createdAt)}</p>
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
