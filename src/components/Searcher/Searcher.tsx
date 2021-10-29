import React, { FC } from "react";
import SearchButton from "./SearchButton/SearchButton";
import searchClasses from "./Searcher.module.scss";

interface ISearcher {
  placeholder: string;
  customClass?: string;
  inputClasses?: string;
  bodyClasses?: string;
}

const Searcher: FC<ISearcher> = ({
  placeholder,
  bodyClasses,
  inputClasses,
}) => {
  //   const inputClasses = [customClass && customClass];
  const searchBodyClasses = [
    searchClasses.searchBody,
    bodyClasses && bodyClasses,
  ].join(" ");
  const searchInputClasses = [
    searchClasses.searchInput,
    inputClasses && inputClasses,
  ].join(" ");
  return (
    <div className={searchBodyClasses}>
      <input
        placeholder={placeholder}
        type="text"
        className={searchInputClasses}
      ></input>
      <SearchButton />
    </div>
  );
};

export default Searcher;
