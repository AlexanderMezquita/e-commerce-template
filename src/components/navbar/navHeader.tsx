import { FC } from "react";

const NavHeader = () => {
  return (
    <header>
      <nav aria-label="secondary" className="bg-background  ">
        <ul className=" flex justify-between items-center mr-auto ml-auto max-w-screen-2xl">
          <ul className="flex items-center   w-full md:w-fit ">
            <li className="  md:px-16 h-full bg-white flex w-full md:w-fit items-center">
              <a className="p-3 h-full garamond">A & F</a>
            </li>
            <li className="   md:px-16 h-full text-grey-custom/50 w-full  md:w-fit  hover:bg-neutral-200 flex items-center">
              <a className="p-3 garamond"> abercrombie kids</a>
            </li>
          </ul>
          <li className="mr-5 md:flex hidden items-center font-bold text-sm space-x-2 cursor-pointer hover:text-primary/70 ">
            <i className="fi fi-rs-circle-user text-md"></i>
            <p>Sign in or Create Account</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
