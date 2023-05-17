import React, { FC } from "react";
import LeftSideBar from "./leftSidebar";
import SearchInput from "../globals/searchInput";

type BurgerMenuProps = {
  openLeftBar: boolean;
  toggleLeftBar: Function;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ openLeftBar, toggleLeftBar }) => {
  return (
    <LeftSideBar open={openLeftBar}>
      <div className="p-3">
        <i
          className="fi fi-rs-cross text-sm w-full flex justify-end items-center py-3 mb-5"
          onClick={() => toggleLeftBar()}
        ></i>
        <SearchInput />
      </div>
    </LeftSideBar>
  );
};

export default BurgerMenu;
