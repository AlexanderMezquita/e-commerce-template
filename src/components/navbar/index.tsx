"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Offer from "./offer";
import PopOver from "./popOver";
import categories from "./categories";

export default function NavBar() {
  const [popOver, setPopOver] = useState("none");
  const [showNav, setShowNav] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > 48) {
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
      <header>
        <nav>
          <ul className="  h-12  bg-background ">
            <div className=" flex justify-between items-center mr-auto ml-auto max-w-screen-2xl">
              <div className="flex  w-full md:w-fit ">
                <li className="  md:px-16 h-full bg-white flex w-full md:w-fit items-center">
                  <a>A & F</a>
                </li>
                <li className="   md:px-16 h-full text-grey-custom/50 w-full  md:w-fit  hover:bg-neutral-200 flex items-center">
                  <a>abercrombie kids</a>
                </li>
              </div>
              <li className="mr-5 hidden md:block">
                <i className="fi fi-rr-lock"></i>
                <p>Sign in or Create Account</p>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <nav className={`${showNav && "sticky top-0"}  bg-white w-full`}>
        <ul className="flex justify-between items-center px-4 navBar max-w-screen-2xl h-20 mr-auto ml-auto">
          <ul className=" md:hidden flex items-center h-full space-x-5 flex-grow basis-0">
            <li>Search</li>
          </ul>
          <div className=" ml-2 flex items-center">
            <li>
              <Image
                width={190}
                height={30}
                alt="logo"
                src="/logo.png"
                placeholder="blur"
                blurDataURL={"/logo.png"}
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

          <ul className="flex items-center h-full space-x-5 justify-end flex-grow basis-0">
            <li>Search</li>
            <li className="hidden md:block">Search</li>
            <li>Search</li>
          </ul>
        </ul>
      </nav>
      <Offer />
    </>
  );
}
