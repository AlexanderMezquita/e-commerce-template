import { useState } from "react";
import BackDrop from "../globals/backdrop";
import BurgerMenu from "../sidebar/burgerMenu";

const Burguer = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <i className="fi fi-rr-menu-burger" onClick={() => setOpenBar(true)}></i>
      <BurgerMenu open={openBar} toggle={setOpenBar} />
      <BackDrop open={openBar} toggle={setOpenBar} />
    </>
  );
};

export default Burguer;
