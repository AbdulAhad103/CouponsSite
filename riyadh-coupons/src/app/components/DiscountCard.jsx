import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DiscountCard = ({
  image,
  headline,
  discountPercentage,
  isCoupon,
  couponCode,
  referralLink,
}) => {
  const convertToArabic = (numeric) => {
    return numeric.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  };

  const [popup, setPopUp] = useState(false)
  const copyText = () => {
    navigator.clipboard.writeText(couponCode);
    setPopUp(true);
    setTimeout(()=> {
      setPopUp(false)
    }, 2000)
  }

  return (
    <div className="relative bg-white w-full min-w-[300px] md:w-[24%] md:max-w-[382px] gap-5 border border-gray-200 rounded-2xl flex flex-col justify-center items-center p-5 mb-16">
      <div className="w-full md:w-full md:max-w-[339px] h-[332px] bg-[#F2F2F2] rounded-xl flex justify-center">
        <Image
          src={image}
          alt={`${headline} coupon code`}
          className="w-[250px] aspect-auto object-contain"
        />
      </div>
      <h4 className={`text-2xl ${isCoupon ? "mb-5" : ""}`}>{headline}</h4>
      {!isCoupon && (
        <p className="text-2xl -mt-2 mb-5 font-['Helvetica_55_Roman_Regular'] text-[#1B1C1C]">
          خصم {convertToArabic(discountPercentage.toString())}٪
        </p>
      )}
      <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center items-start gap-3">
        {isCoupon ? (
          <>
            <div className="px-3 pt-2 pb-3 rounded-xl bg-[#FBC500] text-[#021EDD]">
              <button
                className="text=['Ping AR + LT Heavy'] text-2xl cursor-pointer"
                onClick={copyText}
              >
                {couponCode}
              </button>
            </div>
            <div className="h-5">
              <div className="bg-[#FBC500] text-[10px] px-3 pb-1">
                نسبة الخصم
              </div>
              <div className="bg-[#021EED] flex justify-center pt-1 pb-2 text-white text-3xl rounded-bl-lg rounded-br-lg">
                {discountPercentage}
              </div>
            </div>
          </>
        ) : (
          <Link
            href={referralLink}
            className="bg-[#021EED] hover:bg-[#0000ac] transition-all text-white text-xl px-3 pt-1 pb-2 rounded-lg"
          >
            أحصل على العرض
          </Link>
        )}
      </div>
      <div className={`bg-black text-white font-sans px-3 py-1 rounded-md ${popup ? 'opacity-1':'opacity-0'} transition-all absolute top-3 right-3`}>Coupon Code Copied!</div>
    </div>
  );
};

export default DiscountCard;
