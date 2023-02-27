import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <input
          className="border-0 outline-0 w-full"
          placeholder="Suche"
          bordered="false"
        />
        <div className="pr-1.5 hover:cursor-pointer">
          <BsSearch />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SearchInput;
