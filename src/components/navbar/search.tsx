import { useState } from "react";
import BackDrop from "../globals/backdrop";
import SearchMenu from "../sidebar/searchMenu";

const Search = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <i className="fi fi-rs-search" onClick={() => setOpenBar(true)}></i>
      <SearchMenu open={openBar} toggle={setOpenBar} />
      <BackDrop open={openBar} toggle={setOpenBar} />
    </>
  );
};

export default Search;
