"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Offer from "./offer";
import PopOver from "./popOver";
import NavHeader from "./navHeader";
import categories from "./categories";

export default function NavBar() {
  const topNavHeight = 48;
  const [popOver, setPopOver] = useState("none");
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
        <ul className="flex justify-between items-center px-1 md:px-4 navBar max-w-screen-2xl h-20 mr-auto ml-auto">
          <div className=" md:hidden flex items-center h-full space-x-5 flex-grow basis-0">
            <li>Search</li>
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
                  onMouseEnter={() => setPopOver(item.name)}
                  onMouseLeave={() => setPopOver("none")}
                  key={item.name}
                  className="relative hidden px-5 md:block"
                  id={`${item.name}`}
                >
                  <a>{item.name}</a>
                  <PopOver
                    categoryToOpen={item.name}
                    popOver={popOver}
                    setPopOver={setPopOver}
                  />
                </li>
              );
            })}
          </div>

          <div className="flex items-center h-full space-x-2 md:space-x-5 justify-end flex-grow basis-0">
            <li>
              <i className="fi fi-rs-search"></i>
            </li>
            <li className="hidden md:block">Search</li>
            <li>
              <i className="fi fi-rr-shopping-bag"></i>
            </li>
          </div>
        </ul>
      </nav>
      <Offer />
    </>
  );
}
