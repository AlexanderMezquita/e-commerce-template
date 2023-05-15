"use client";

import NavBar from "@/components/navbar";
import Offer from "@/components/navbar/offer";
import Backdrop from "@/components/sidebar/backdrop";
import BurgerMenu from "@/components/sidebar/burgerMenu";
import { useState } from "react";
import SearchMenu from "@/components/sidebar/searchMenu";

export default function Home() {
  const [openLeftBar, setOpenLeftBar] = useState(false);
  const [openRightBar, setOpenRightBar] = useState(false);

  const toggleLeftBar = () => {
    setOpenLeftBar((prevState) => !prevState);
  };
  const toggleRightBar = () => {
    setOpenRightBar((prevState) => !prevState);
  };

  return (
    <>
      <NavBar toggleLeftBar={toggleLeftBar} toggleRightBar={toggleRightBar} />
      <BurgerMenu openLeftBar={openLeftBar} toggleLeftBar={toggleLeftBar} />
      <Backdrop
        openLeftBar={openLeftBar}
        toggleLeftBar={toggleLeftBar}
        openRightBar={openRightBar}
        toggleRightBar={toggleRightBar}
      />
      <SearchMenu openRightBar={openRightBar} toggleRightBar={toggleRightBar} />
      <Offer />
      <main></main>
    </>
  );
}
