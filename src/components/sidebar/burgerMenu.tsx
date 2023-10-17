import React, { FC } from "react";
import SideBar from "./sidebar";
import SearchInput from "../globals/searchInput";
import categories from "../navbar/categories";
import { ButtonBlue } from "../globals/buttons";

type BurgerMenuProps = {
  open: boolean;
  toggle: Function;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ open, toggle }) => {
  return (
    <SideBar open={open} position={"left-0"} translate="-translate-x-full">
      <div className="p-3 overflow-y-auto">
        <i
          className="fi fi-rs-cross text-sm w-full flex justify-end items-center py-3 mb-2"
          onClick={() => toggle()}
        ></i>
        <SearchInput />
        <u className=" no-underline ">
          {categories.map((item) => {
            return (
              <li
                key={item.name}
                className="flex items-center  text-primary px-5 py-3 cursor-pointer justify-between"
              >
                <a className="font-bold">{item.name}</a>
                <i className="fi fi-rs-angle-down text-sm text-neutral-400"></i>
              </li>
            );
          })}
        </u>
      </div>
      <div className=" bg-background p-5">
        <h1 className=" text-2xl">Your Account</h1>
        <hr className="my-5"></hr>

        <ButtonBlue link="sign in" />
      </div>
      <hr className="my-5"></hr>

      <ul className="flex items-center divide-x-2 [&>li]:px-4 [&>li>a]:text-[11px] [&>li>a]:underline [&>li>a]:text-neutral-400 pb-5 px-5">
        <li className="flex items-center space-x-4">
          <img alt="canada flag" src="assets/canada.svg" className="w-6" />
          <a className="hover:text-primary">Canada</a>
        </li>
        <li>
          <a className="hover:text-primary">Change</a>
        </li>
      </ul>
      <ul className="space-y-4 p-5">
        <li>
          <img alt="logo" src="/logo.png" className=" w-48" />
        </li>
        <li>
          <a>Our Brands</a>
        </li>
        <li>
          <a>Abercrombie & Fitch</a>
        </li>
        <li>
          <a>abercrombie kids</a>
        </li>
        <li>
          <a>Hollister</a>
        </li>
        <li>
          <a>GILLY HICKS</a>
        </li>
        <li>
          <a>Social Tourist</a>
        </li>
      </ul>

      <footer className="p-5 bottom-0 w-full  bg-background">
        <img alt="moose-icon" src="/moose-icon.png" className="w-5 mr-5" />
      </footer>
    </SideBar>
  );
};

export default BurgerMenu;
