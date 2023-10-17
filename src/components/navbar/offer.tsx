export default function Offer() {
  const list: string[] = ["See Details", "Shop Men's", "Shop Women's"];
  return (
    <article className=" w-full bg-primary min-[48px]:py-3 text-white text-xs">
      <div className=" max-w-screen-2xl px-4 mx-auto flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:space-x-10">
        <p>Limited Time: Up to 25% Off select styles</p>
        <ul className="lg:flex lg:space-x-5 hidden [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li>a]:underline [&>li>a]:font-light ">
          {list.map((items) => {
            return (
              <li key={items}>
                <a>{items}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
