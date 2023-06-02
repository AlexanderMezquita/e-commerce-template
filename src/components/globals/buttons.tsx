import { FC } from "react";

type ButtonsProps = {
  link: string;
  //   ref: string;
};

export const ButtonTrans: FC<ButtonsProps> = ({ link }) => {
  return (
    <button className="px-14 py-2 bg-white md:bg-inherit border border-white text-primary md:text-white hover:bg-white hover:text-black uppercase font-bold">
      {link}
    </button>
  );
};

export const ButtonBlue: FC<ButtonsProps> = ({ link }) => {
  return <button className=" p-4 w-full text-white">{link}</button>;
};
