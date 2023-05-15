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
      <div className="p-2">
        <SearchInput />
      </div>
    </RightSideBar>
  );
};

export default SearchMenu;
