import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
   return (
    <div className="tc pa2 ">
        <input
            className="pa3 bg-lightest-blue"
            type='search'
            placeholder="search robots"
            onChange={searchChange}
            />
    </div>
   );
}
export default SearchBox;
