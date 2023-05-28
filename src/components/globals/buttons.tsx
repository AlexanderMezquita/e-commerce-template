import { FC } from "react";

type ButtonsProps = {
  link: string;
  //   ref: string;
};

const ButtonTrans: FC<ButtonsProps> = ({ link }) => {
  return (
    <button className="px-14 py-2 bg-inherit border border-white text-white hover:bg-white hover:text-black uppercase font-bold">
      {link}
    </button>
  );
};

export default ButtonTrans;
