import SearchIcon from "icons/SearchIcon";
import React from "react";
import searchButtonClasses from "./SearchButton.module.scss";

const SearchButton = () => {
  return (
    <div className={searchButtonClasses.searchButton}>
      <SearchIcon />
    </div>
  );
};

export default SearchButton;
