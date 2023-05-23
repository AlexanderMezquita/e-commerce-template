const Footer = () => {
  return (
    <footer className=" bg-background">
      <div className="   max-w-screen-2xl mx-auto">
        <div className="  space-y-4 text-center text-sm p-5">
          <p className=" text-primary font-bold">
            Real quick, a few legal things:
          </p>
          <p className=" text-neutral-500">
            *Offer valid in stores and online May 19, 2023 to May 21, 2023 in
            CA. Exclusions apply as indicated. Discount applied at checkout.
          </p>
          <p>
            <a className=" text-neutral-500 underline">See all Offer Details</a>
          </p>
        </div>
        <div className="p-5 pb-32 hidden md:block">
          <div className=" justify-around flex [&>ul]:space-y-4 space-x-10">
            <ul>
              <li>
                <img alt="logo" src="/logo.png" className=" w-48" />
              </li>
              <li>
                <a>Our Brands</a>
              </li>
              <li>
                <a>Abercrombie & Fitch</a>
              </li>
              <li>
                <a>abercrombie kids</a>
              </li>
              <li>
                <a>Hollister</a>
              </li>
              <li>
                <a>GILLY HICKS</a>
              </li>
              <li>
                <a>Social Tourist</a>
              </li>
            </ul>
            <div className="flex space-x-10  [&>ul]:space-y-3 [&>ul>li>a]:text-[11px]">
              <ul>
                <li>
                  <h1>About us</h1>
                </li>
                <li>
                  <a href="#">Brand Protection</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Inclusion and Diversity</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Press Room</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>Help</h1>
                </li>
                <li>
                  <a href="#">Customer Help</a>
                </li>
                <li>
                  <a href="#">Order Help</a>
                </li>
                <li>
                  <a href="#">Shippment and Handling</a>
                </li>
                <li>
                  <a href="#">Online Returns</a>
                </li>
                <li>
                  <a href="#">Track my order</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
              </ul>
            </div>
            <ul className="[&>li]:flex [&>li]:items-center [&>li>a]:text-[12px]">
              <li>
                <i className="fi fi-rr-gift-card"></i>
                <a href="#">Gift Card</a>
              </li>
              <li>
                <i className="fi fi-rs-marker"></i>
                <a href="#">Find a store</a>
              </li>
            </ul>
            <div>
              <button className="bg-inherit border border-primary/20 p-3 mb-3 text-sm hover:text-white text-primary">
                Get emailed exclusive offers!
              </button>
              <ul className=" flex items-center space-x-10 [&>li]:flex [&>li]:items-center      ">
                <li>
                  <i className="fi fi-brands-twitter"></i>
                </li>
                <li>
                  <i className="fi fi-brands-pinterest"></i>{" "}
                </li>
                <li>
                  <i className="fi fi-brands-instagram"></i>{" "}
                </li>
                <li>
                  <i className="fi fi-brands-youtube"></i>{" "}
                </li>
                <li>
                  <i className="fi fi-brands-tik-tok"></i>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-10 mb-3"></hr>
          <div className="flex justify-between">
            <div className="flex">
              <img
                alt="moose-icon"
                src="/moose-icon.png"
                className="w-5 mr-5"
              />
              <ul className="flex divide-x-2 [&>li]:px-4 [&>li>a]:text-[11px] [&>li>a]:underline [&>li>a]:text-neutral-400">
                <li>
                  <a className="hover:text-primary">Privacy / Ad Cookies</a>
                </li>
                <li>
                  <a className="hover:text-primary">Sales Terms</a>
                </li>
                <li>
                  <a className="hover:text-primary">Website Terms of Use</a>
                </li>
                <li>
                  <a className="hover:text-primary">Site Map</a>
                </li>
                <li>
                  <a className="hover:text-primary">Responsible Disclosure</a>
                </li>
              </ul>
            </div>
            <ul className="flex divide-x-2 [&>li]:px-4 [&>li>a]:text-[11px] [&>li>a]:underline [&>li>a]:text-neutral-400">
              <li>
                <img
                  alt="canada flag"
                  src="assets/canada.svg"
                  className="w-6"
                />
              </li>
              <li>
                <a className="hover:text-primary">Change</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex lg:hidden justify-center items-center p-5 ">
          <img alt="footer-logo" src="/footer-logo.png" className="w-40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
