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
      <div className="p-2">
        <SearchInput />
      </div>
    </LeftSideBar>
  );
};

export default BurgerMenu;
