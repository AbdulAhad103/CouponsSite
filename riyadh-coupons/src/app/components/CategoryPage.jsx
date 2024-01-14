"use client";
import { useState } from "react";
import Zara from "../../../public/images/Zara.png";
import Tommy from "../../../public/images/Tommy_Hilfiger.png";
import Turkish from "../../../public/images/Turkish_Airlines.png";
import Alsaif from "../../../public/images/Alsaif_Gallery.png";
import DiscountCard from "./DiscountCard";

const CategoryPage = ({ activeCategory }) => {
  const [coupons, setCoupons] = useState([
    {
      image: Zara,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "5%",
      isCoupon: true,
      couponCode: "RUHCO",
      referralLink: "",
    },
    {
      image: Tommy,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "5%",
      isCoupon: true,
      couponCode: "RUHCO",
      referralLink: "",
    },
    {
      image: Turkish,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "5%",
      isCoupon: true,
      couponCode: "RUHCO",
      referralLink: "",
    },
    {
      image: Alsaif,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "5%",
      isCoupon: true,
      couponCode: "RUHCO",
      referralLink: "",
    },
    {
      image: Alsaif,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "5%",
      isCoupon: true,
      couponCode: "RUHCO",
      referralLink: "",
    },
  ]);
  const [referrals, setReferrals] = useState([
    {
      image: Zara,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "0",
      isCoupon: false,
      couponCode: "",
      referralLink: "/",
    },
    {
      image: Tommy,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "9",
      isCoupon: false,
      couponCode: "",
      referralLink: "/",
    },
    {
      image: Turkish,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "10",
      isCoupon: false,
      couponCode: "",
      referralLink: "/",
    },
    {
      image: Alsaif,
      headline: "الخطوط الجوية التركية",
      discountPercentage: "0",
      isCoupon: false,
      couponCode: "",
      referralLink: "/",
    },
  ]);
  return (
    <div>
      <h2 className="text-right text-4xl mb-2">كوبونات الخصم</h2>
      <h3 className="text-right text-[#9A9A9A] text-3xl mb-10">جرب التوفير</h3>
      <div className="flex justify-end gap-3 items-center flex-wrap max-w-[1658px]">
        {coupons.map((coupon, index) => (
          <DiscountCard {...coupon} key={index} />
        ))}
      </div>
      <h2 className="text-right text-4xl mb-2 mt-24">عروض المتاجر</h2>
      <h3 className="text-right text-[#9A9A9A] text-3xl mb-10">متاجر مميزة</h3>
      <div className="flex justify-end gap-3 items-center flex-wrap max-w-[1658px]">
        {referrals.map((referral, index) => (
          <DiscountCard {...referral} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
