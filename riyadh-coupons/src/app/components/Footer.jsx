import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/images/favicon.png"

const Footer = () => {
  return (
    <footer className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between items-center w-[1500px]">
        <Link href={'mailto:hey@riyadhcoupon.com'} className="px-5 pt-1 pb-2 bg-[#081EDD] border border-[#707070] text-white rounded-xl text-2xl">Hey@RiyadhCoupon.com</Link>
        <Image src={Logo} className="w-28 h-28" />
        <form onSubmit={(e)=>e.preventDefault()} className="max-w-[442px]">
            <input placeholder="USER MAIL" className="px-5 pt-3 pb-4 text-center uppercase text-[#081EDD] placeholder:text-[#081EDD] text-2xl rounded-xl border border-[#081EDD] w-full focus:appearance-none focus:outline-none"/>
            <button type="submit" className="bg-[#212121] text-[#FBC52D] w-full rounded-lg pt-1 pb-2 mt-2">أرسلي العروض الفخمة</button>
        </form>
    </footer>
  )
}

export default Footer
