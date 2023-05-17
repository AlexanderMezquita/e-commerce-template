import { FC } from "react";

type BackDropProps = {
  openLeftBar: Boolean;
  toggleLeftBar: Function;
  openRightBar: Boolean;
  toggleRightBar: Function;
};

const BackDrop: FC<BackDropProps> = ({
  openLeftBar,
  toggleLeftBar,
  openRightBar,
  toggleRightBar,
}) => {
  return (
    <>
      <div
        className={`${
          openLeftBar ? " opacity-100 z-10   " : " opacity-0 -z-10 "
        } top-0 fixed  left-0 w-full h-screen bg-black bg-opacity-50 transition-all duration-300`}
        onClick={() => toggleLeftBar()}
      ></div>
      <div
        className={`${
          openRightBar ? " opacity-100 z-10 " : " opacity-0 -z-10 "
        } top-0 fixed   left-0 w-full h-screen bg-black bg-opacity-50 transition-all duration-300`}
        onClick={() => toggleRightBar()}
      ></div>
    </>
  );
};

export default BackDrop;
