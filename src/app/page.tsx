import ButtonTrans from "@/components/globals/buttons";
import Offer from "@/components/navbar/offer";

export default function Home() {
  return (
    <>
      <main>
        <Offer />
        <div id="page" className=" max-w-screen-2xl mx-auto">
          <div>Hello</div>
          <section className="relative ">
            <img
              alt="landing image"
              src="/assets/landing-bg.jpg"
              className=" object-fill max-h-[850px] w-full "
            />
            <div className="absolute top-0 flex flex-col justify-center items-end w-full h-full px-20">
              <div className=" flex flex-col items-center gap-5">
                <h1 className=" text-5xl text-white">The Essential Tee</h1>
                <ButtonTrans link="shop men's" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
