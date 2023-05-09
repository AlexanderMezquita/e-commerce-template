"use client";

import Image from "next/image";
import React, { useState } from "react";
export default function NavBar() {
  const [popOver, setPopOver] = useState(true);
  const categories = [
    `Men's`,
    `Women's`,
    `Jean`,
    `Fierce`,
    "Active",
    "Sale",
    "Purpose",
  ];

  const PopOver = () => {
    return <div className="bg-white h-96 w-96">hello</div>;
  };

  const Offer = () => {
    return (
      <article className=" w-full bg-primary h-12  px-4 text-white">
        <div className=" max-w-screen-2xl flex items-center space-x-10">
          <p>Limited Time: Up to 25% Off select styles</p>
          <ul className="flex space-x-5">
            <li>
              <a>See Details</a>
            </li>
            <li>
              <a>See Details</a>
            </li>
            <li>
              <a>See Details</a>
            </li>
          </ul>
        </div>
      </article>
    );
  };

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
            <i className="fi fi-ts-circle-user"></i>
            <p>Sign in or Create Account</p>
          </li>
        </div>
      </ul>

      <nav>
        <ul className="flex justify-between navBar max-w-screen-2xl h-20 mr-auto ml-auto">
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
              />
            </li>
            {categories.map((item) => {
              return (
                <li onMouseEnter={() => console.log("enter")} key={item}>
                  <a>{item}</a>
                </li>
              );
            })}
          </div>
          <div className=" mr-2">
            <ul className="flex items-center h-full space-x-5">
              <li>Search</li>
              <li>Search</li>
              <li>Search</li>
            </ul>
          </div>
        </ul>
      </nav>
      <Offer />
    </>
  );
}
