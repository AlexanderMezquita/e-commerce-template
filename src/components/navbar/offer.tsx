export default function Offer() {
  return (
    <article className=" w-full bg-primary min-[48px]:    p-3 text-white">
      <div className=" max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:space-x-10">
        <p>Limited Time: Up to 25% Off select styles</p>
        <ul className="lg:flex lg:space-x-5 hidden [%>li]:flex [%>li]:justify-center [%>li]:items-center ">
          <li>
            <a>See Details</a>
          </li>
          <li>
            <a>See Details</a>
          </li>
          <li>
            <a>See Details</a>
          </li>
        </ul>
      </div>
    </article>
  );
}
