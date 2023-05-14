import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h2>Hello</h2>
        <i className="fi fi-brands-instagram"></i>
        <i className="fi fi-sr-home"></i>
      </main>
    </>
  );
}
