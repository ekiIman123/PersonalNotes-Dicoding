import React from "react";

function SearchBar({ onSearch }) {
  const onSearchbarChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search for notes title..."
        onChange={onSearchbarChange}
      />
    </div>
  );
}

export default SearchBar;
