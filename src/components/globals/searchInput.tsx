import React from "react";

const SearchInput = () => {
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fi fi-rs-search text-gray-300"></i>
        </div>
        <input
          type="search"
          className=" w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
