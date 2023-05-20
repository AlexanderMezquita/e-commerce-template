import React, { FC } from "react";
import SideBar from "./sidebar";
import SearchInput from "../globals/searchInput";

type BurgerMenuProps = {
  openLeftBar: boolean;
  toggleLeftBar: Function;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ openLeftBar, toggleLeftBar }) => {
  return (
    <SideBar
      open={openLeftBar}
      position={"left-0"}
      translate="-translate-x-full"
    >
      <div className="p-3">
        <i
          className="fi fi-rs-cross text-sm w-full flex justify-end items-center py-3 mb-5"
          onClick={() => toggleLeftBar()}
        ></i>
        <SearchInput />
      </div>
    </SideBar>
  );
};

export default BurgerMenu;
