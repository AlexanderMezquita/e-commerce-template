import { FC } from "react";

type NavHeaderProps = {
  topNavHeight: number;
};

const NavHeader: FC<NavHeaderProps> = ({ topNavHeight }) => {
  return (
    <header>
      <nav
        aria-label="secondary"
        className="bg-background "
        style={{ height: topNavHeight }}
      >
        <ul className=" flex justify-between items-center mr-auto ml-auto max-w-screen-2xl">
          <ul className="flex  w-full md:w-fit ">
            <li className="  md:px-16 h-full bg-white flex w-full md:w-fit items-center">
              <a className="p-3">A & F</a>
            </li>
            <li className="   md:px-16 h-full text-grey-custom/50 w-full  md:w-fit  hover:bg-neutral-200 flex items-center">
              <a className="p-3"> abercrombie kids</a>
            </li>
          </ul>
          <li className="mr-5 md:flex hidden space-x-4 ">
            <i className="fi fi-rs-circle-user"></i>
            <p>Sign in or Create Account</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
