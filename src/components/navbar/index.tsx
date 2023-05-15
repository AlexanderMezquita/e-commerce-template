"use client";

import Image from "next/image";
import React, { useState, useEffect, FC } from "react";
import Offer from "./offer";
import PopOver from "./popOver";
import NavHeader from "./navHeader";
import categories from "./categories";
import LeftSideBar from "../sidebar/leftSidebar";

type NavBarProps = {
  toggleLeftBar: Function;
  toggleRightBar: Function;
};

const NavBar: FC<NavBarProps> = ({ toggleLeftBar, toggleRightBar }) => {
  const topNavHeight = 48;
  const [categorySelected, setCategorySelected] = useState("none");
  const [showNav, setShowNav] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > topNavHeight) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <>
      <NavHeader topNavHeight={topNavHeight} />
      <nav
        aria-label="primary"
        className={`${showNav && "sticky top-0"}  bg-white w-full`}
      >
        <ul className="flex justify-between items-center  navBar max-w-screen-2xl h-20 mx-auto px-4">
          <div className=" md:hidden flex items-center h-full space-x-5 flex-grow basis-0">
            <li>
              <i
                className="fi fi-rr-menu-burger"
                onClick={() => toggleLeftBar()}
              ></i>
            </li>
          </div>
          <div className=" flex items-center">
            <li>
              <img
                className="w-40 md:w-48"
                alt="logo"
                src="/logo.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
            {categories.map((item) => {
              return (
                <li
                  onMouseEnter={() => setCategorySelected(item.name)}
                  onMouseLeave={() => setCategorySelected("none")}
                  key={item.name}
                  className="relative hidden px-5 md:block"
                  id={`${item.name}`}
                >
                  <a>{item.name}</a>
                  <PopOver
                    categoryToOpen={item.name}
                    categorySelected={categorySelected}
                    setCategorySelected={setCategorySelected}
                  />
                </li>
              );
            })}
          </div>

          <div className="flex items-center h-full space-x-7 md:space-x-10 justify-end flex-grow basis-0">
            <li>
              <i
                className="fi fi-rs-search"
                onClick={() => toggleRightBar()}
              ></i>
            </li>
            <li className="hidden md:block">Search</li>
            <li>
              <i className="fi fi-rr-shopping-bag"></i>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
