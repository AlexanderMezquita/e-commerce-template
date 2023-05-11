"use client";

import Image from "next/image";
import React, { useState } from "react";
import Offer from "./offer";
import PopOver from "./popOver";
import categories from "./categories";

export default function NavBar() {
  const [popOver, setPopOver] = useState("Men's");

  return (
    <>
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
            <p>Sign in or Create Account</p>
          </li>
        </div>
      </ul>
      <nav>
        <ul className="flex justify-between items-center px-4 navBar max-w-screen-2xl h-20 mr-auto ml-auto">
          <div className=" md:hidden">
            <p>Icon</p>
          </div>
          <div className=" ml-2 flex items-center space-x-8 ">
            <li>
              <Image
                width={190}
                height={30}
                alt="logo"
                src="/logo.png"
                priority
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
                  className="relative hidden md:block"
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
          <div>
            <ul className="flex items-center h-full space-x-5">
              <li>Search</li>
              <li className="hidden md:block">Search</li>
              <li>Search</li>
            </ul>
          </div>
        </ul>
      </nav>
      <Offer />
    </>
  );
}
