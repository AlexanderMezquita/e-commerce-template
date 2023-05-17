import React, { FC } from "react";
import SearchInput from "../globals/searchInput";
import RightSideBar from "./rightSidebar";

type SearchMenuProps = {
  openRightBar: boolean;
  toggleRightBar: Function;
};

const SearchMenu: FC<SearchMenuProps> = ({ openRightBar, toggleRightBar }) => {
  return (
    <RightSideBar open={openRightBar}>
      <div className="bg-background flex p-5 justify-between items-center mb-5">
        <h3>Search</h3>

        <i
          className="fi fi-rs-cross text-sm "
          onClick={() => toggleRightBar()}
        ></i>
      </div>
      <SearchInput />
      <div className=" p-5">
        <h1 className="mb-4 font-bold">Popular searches</h1>
        <ul className="text-sm  hover:[&>li]:bg-background cursor-pointer [&>li]:p-2 [&>li]:text-grey-custom ">
          <li>Body Suits</li>
          <li>Linen</li>
          <li>Shorts</li>
          <li>Skirts</li>
          <li>Golf</li>
        </ul>
      </div>
    </RightSideBar>
  );
};

export default SearchMenu;
