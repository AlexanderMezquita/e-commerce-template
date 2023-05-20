import { useState } from "react";
import BackDrop from "../globals/backdrop";
import BurgerMenu from "../sidebar/burgerMenu";

const Burguer = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <i className="fi fi-rr-menu-burger" onClick={() => setOpenBar(true)}></i>
      <BurgerMenu openLeftBar={openBar} toggleLeftBar={setOpenBar} />
      <BackDrop open={openBar} toggleBar={setOpenBar} />
    </>
  );
};

export default Burguer;
