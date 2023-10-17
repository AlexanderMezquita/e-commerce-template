import { ButtonTrans } from "@/components/globals/buttons";
import Offer from "@/components/navbar/offer";
import Image from "next/image";
import { createProductAsyn } from "../../prisma/seedData";
import Link from "next/link";

export default async function Home() {
  // await createProductAsyn();

  return (
    <main>
      <Offer />
      <div id="page" className="max-w-screen-2xl mx-auto space-y-5">
        <section className="relative mt-5 ">
          <picture className=" hidden md:block min-h-[650px]">
            {/* <source media="(max-width:750px)" srcSet="/assets/landing.webp" /> */}
            <source
              media="(max-width:765px)"
              srcSet="/assets/landing-bg.-sm.jpg"
            />

            <Image
              fill={true}
              alt="landing image"
              className="object-cover"
              src="/assets/landing.webp"
            />
          </picture>
          <video
            loop
            muted
            autoPlay
            preload="auto"
            playsInline
            poster="/assets/poster-video.jpg"
            className=" block md:hidden"
          >
            <source src="assets/landing-video-sm.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-0 flex flex-col justify-center items-center md:items-start w-full h-full">
            <div className=" flex flex-col items-center w-6/12 gap-5">
              <h1 className=" text-2xl text-white uppercase">trend edit</h1>
              <h1 className=" text-5xl text-white uppercase">Noticeably 90s</h1>
              <ButtonTrans link="shop women's" />
            </div>
          </div>
        </section>

        <section className="relative ">
          <picture>
            {/* <source media="(max-width:750px)" srcSet="/assets/landing.webp" /> */}
            <source
              media="(max-width:765px)"
              srcSet="/assets/landing-bg.-sm.jpg"
            />
            <img
              alt="landing image"
              src="/assets/landing-bg.jpg"
              className=" object-center "
            />
          </picture>

          <div className="absolute top-0 flex flex-col justify-center items-center md:items-end w-full h-full">
            <div className=" flex flex-col items-center w-6/12 gap-5">
              <img
                alt="Get away shop"
                src="/assets/GETAWAYSHOP2022.svg"
                className=" w-28 md:w-32"
              />
              <h1 className=" text-3xl md:text-5xl text-white">
                The Essential Tee
              </h1>
              <ButtonTrans link="shop men's" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
