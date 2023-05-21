import { useState } from "react";
import BackDrop from "../globals/backdrop";
import ShoppingCartMenu from "../sidebar/shoppingCartMenu";

const ShoppingCart = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <i className="fi fi-rr-shopping-bag" onClick={() => setOpenBar(true)}></i>
      <ShoppingCartMenu open={openBar} toggle={setOpenBar} />
      <BackDrop open={openBar} toggleBar={setOpenBar} />
    </>
  );
};

export default ShoppingCart;
