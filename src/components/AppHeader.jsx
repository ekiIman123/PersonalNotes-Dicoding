import React from "react";
import SearchBar from "./HeaderSearch";
import Navigation from "./Navigation";

function AppHeader({ onSearch }) {
  return (
    <div className="note-app__header container gap-3">
      <h1>Personal Notes</h1>
      <Navigation />
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default AppHeader;
