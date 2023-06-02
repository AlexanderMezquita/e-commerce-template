import { ButtonBlue } from "../globals/buttons";
import SideBar from "./sidebar";
import { FC } from "react";

type CartMenuProps = {
  open: boolean;
  toggle: Function;
};

const ShoppingCartMenu: FC<CartMenuProps> = ({ open, toggle }) => {
  return (
    <SideBar open={open} position={"right-0"} translate="translate-x-full">
      <header className="bg-background flex p-5 justify-between items-center mb-5">
        <h3>Shopping Cart</h3>

        <i
          className="fi fi-rs-cross text-sm "
          onClick={() => toggle(false)}
        ></i>
      </header>

      <div className="p-5">
        <h3 className="text-grey-custom mb-5 text-center ">
          There are no items in your bag
        </h3>
        <hr></hr>
      </div>

      <footer className="p-5 bottom-0 w-full absolute bg-background">
        <h1>Subtotal</h1>
        <hr className="my-5"></hr>
        <ButtonBlue link="view bag" />
      </footer>
    </SideBar>
  );
};

export default ShoppingCartMenu;
