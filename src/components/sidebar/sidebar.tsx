import React, { ReactNode, useEffect } from "react";
import { FC } from "react";
type SidebarProps = {
  translate: string;
  position: string;
  open: boolean;
  children: ReactNode;
};

const SideBar: FC<SidebarProps> = ({ open, translate, position, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <aside
      className={`${
        open ? "" : translate
      } z-20 fixed bg-white ${position} top-0  bottom-0 w-[300px] md:w-[400px] transition-all duration-300 overflow-y-auto `}
      id="sideBarContent"
    >
      {children}
    </aside>
  );
};

export default SideBar;
