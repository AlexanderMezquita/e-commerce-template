import { FC } from "react";

type BackDropProps = {
  open: Boolean;
  toggle: Function;
};

const BackDrop: FC<BackDropProps> = ({ open, toggle }) => {
  return (
    <div
      className={`${
        open ? " opacity-100 z-10 " : " opacity-0 hidden "
      } top-0 fixed  left-0 w-full h-screen bg-black bg-opacity-50 transition-all duration-300`}
      onClick={() => toggle()}
    ></div>
  );
};

export default BackDrop;
