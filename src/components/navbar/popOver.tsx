import { FC } from "react";

type PopOverProps = {
  categoryToOpen: string;
  popOver: string;
  setPopOver: Function;
};

const PopOver: FC<PopOverProps> = ({ categoryToOpen, popOver, setPopOver }) => {
  return (
    <aside
      className={`${
        popOver === categoryToOpen ? "" : "hidden"
      }  absolute top-12  bg-white  text-white px-20 py-16`}
      onMouseLeave={() => setPopOver("none")}
    >
      <div className="flex space-x-48">
        <div className="text-black categories">
          <h4 className="mb-5">Categories</h4>
          <ul className=" mr-8 space-y-4 ">
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
          </ul>
        </div>
        <div className="text-black categories">
          <h4 className="mb-5">Categories</h4>
          <ul className=" mr-8 space-y-4 ">
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
            <li>
              <a>Test</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default PopOver;
