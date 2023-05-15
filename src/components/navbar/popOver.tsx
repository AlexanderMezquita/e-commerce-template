import { FC } from "react";

type PopOverProps = {
  categoryToOpen: string;
  categorySelected: string;
  setCategorySelected: Function;
};

const PopOver: FC<PopOverProps> = ({
  categoryToOpen,
  categorySelected,
  setCategorySelected,
}) => {
  return (
    <aside
      className={`${
        categorySelected === categoryToOpen ? "" : "hidden"
      }  absolute top-11  bg-white  text-white px-20 pb-16 pt-10 flex justify-start
       space-x-48`}
      onMouseLeave={() => setCategorySelected("none")}
    >
      <div className=" categories [&>h4]:text-primary">
        <h4 className="mb-3 ">Categories</h4>
        <ul className=" space-y-4">
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
      <div className=" categories">
        <h4 className="mb-5">Categories</h4>
        <ul className="space-y-4 ">
          <li>
            <a>Test</a>
          </li>
          <li>
            <a>Test</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default PopOver;
