import React, { ReactNode, useEffect } from "react";
import { FC } from "react";
type RightSidebarProps = {
  open: boolean;
  children: ReactNode;
};

const RightSideBar: FC<RightSidebarProps> = ({ open, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div
      className={`${
        open ? "" : " translate-x-full"
      } z-10 fixed bg-white top-0 right-0 bottom-0 w-80  transition-all duration-300 overflow-y-auto `}
      id="sideBarContent"
    >
      {children}
    </div>
  );
};

export default RightSideBar;
