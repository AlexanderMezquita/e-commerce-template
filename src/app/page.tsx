import NavBar from "@/components/navbar";
import Offer from "@/components/navbar/offer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Offer />
        <div className="max-w-screen-2xl mx-auto  h-screen">hello</div>
      </main>
    </>
  );
}
