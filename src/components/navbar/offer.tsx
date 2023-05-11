export default function Offer() {
  return (
    <article className=" w-full bg-primary h-12  px-4 text-white">
      <div className=" max-w-screen-2xl flex items-center space-x-10">
        <p>Limited Time: Up to 25% Off select styles</p>
        <ul className="flex space-x-5">
          <li>
            <a>See Details</a>
          </li>
          {/* <li className=" hidden md:block">
              <a>See Details</a>
            </li> */}
          <li>
            <a>See Details</a>
          </li>
        </ul>
      </div>
    </article>
  );
}
