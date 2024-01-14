"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/favicon.png";
import Star from "./Star";
import { useEffect, useState } from "react";

const Footer = () => {
  const [winWidth, setWinWidth] = useState("851")
  useEffect(()=> {
    setWinWidth(window.innerWidth)
    window.addEventListener('resize', ()=> {
      setWinWidth(window.innerWidth)
    })
  }, [winWidth])
  return (
    <footer className="absolute bottom-0 translate-y-[105%] md:translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between items-center w-full max-w-[1500px] flex-col-reverse md:flex-row">
      <Link
        href={"mailto:hey@riyadhcoupon.com"}
        className="px-5 pt-1 pb-2 bg-[#081EDD] border border-[#707070] text-white rounded-xl text-2xl mb-5 md:mb-0"
      >
        Hey@RiyadhCoupon.com
      </Link>
      <p className="block md:hidden text-[#021EDD] text-xl mt-5 mb-3">تواصل معنا</p>
      <Image src={Logo} alt="Logo" className="w-28 h-28 hidden md:block" />
      <form onSubmit={(e) => e.preventDefault()} className="max-w-[442px] bg-[#] md:bg-transparent">
        <input
          placeholder={
            winWidth > 760 ? "USER MAIL" : "usermail@usermail.com"
          }
          className="px-5 pt-1 pb-2 md:pt-3 md:pb-4 text-center text-[#081EDD] placeholder:text-[#081EDD] text-2xl rounded-xl border border-[#081EDD] w-full focus:appearance-none focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#212121] text-[#FBC52D] w-full rounded-lg pt-1 pb-2 mt-2 flex  justify-center items-center gap-3 text-xl"
        >
          أرسلي العروض الفخمة <Star width={20} color={"#FBC500"} />
        </button>
      </form>
    </footer>
  );
};

export default Footer;
