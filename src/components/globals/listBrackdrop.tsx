import { FC } from "react";

type ListBackDropProps = {
  open: string;
};

const ListBackDrop: FC<ListBackDropProps> = ({ open }) => {
  return (
    <>
      <div
        className={`${
          open !== "none" ? " opacity-100  " : " opacity-0 hidden "
        } absolute left-0 w-full h-screen  bg-black bg-opacity-50 transition-all duration-300`}
      ></div>
    </>
  );
};

export default ListBackDrop;
