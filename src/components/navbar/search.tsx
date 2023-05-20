import { useState } from "react";
import BackDrop from "../globals/backdrop";
import SearchMenu from "../sidebar/searchMenu";

const Search = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <i className="fi fi-rs-search" onClick={() => setOpenBar(true)}></i>
      <SearchMenu openRightBar={openBar} toggleRightBar={setOpenBar} />
      <BackDrop open={openBar} toggleBar={setOpenBar} />
    </>
  );
};

export default Search;
