import Searcher from "components/Searcher/Searcher";
import React from "react";
import mainHeaderClasses from "../mainHeader.module.scss";

const SearcherContainer = () => {
  return (
    <>
      <Searcher placeholder={"поиск"} />
    </>
  );
};

export default SearcherContainer;
