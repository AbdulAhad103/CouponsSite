"use client";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <>
      <main className="relative max-w-[1658px] w-[85vw] mx-auto flex flex-col gap-[2svh] pb-52">
        <Header />
        <Pagination />
        <Footer />
      </main>
      <div className="block md:hidden h-28 md:h-24 w-full bg-[#081edd]"></div>
      <div className="h-28 md:h-24 w-full bg-[#FBC52D]"></div>
    </>
  );
}
