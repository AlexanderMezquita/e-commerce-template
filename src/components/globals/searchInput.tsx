import React from "react";

const SearchInput = () => {
  return (
    <form className="p-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <i className="fi fi-rs-search text-gray-300"></i>
        </div>
        <input
          type="search"
          className=" w-full p-4 pl-10 text-sm text-gray-900 border focus:border-gray-400 border-gray-700 rounded-md  "
          placeholder="Search Products, Colors..."
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
