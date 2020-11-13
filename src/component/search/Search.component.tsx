import React from "react";
import "./Search.css";

const Search = ({
  value,
  handleOnChange,
}: {
  value?: string;
  handleOnChange?(event: any): void;
}) => {
  return (
    <input
      type="search"
      placeholder="¿Qué estás buscando?"
      className="Search"
      maxLength={512}
      onChange={handleOnChange}
      value={value}
    />
  );
};

export default Search;
