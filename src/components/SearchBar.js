import React from "react";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
