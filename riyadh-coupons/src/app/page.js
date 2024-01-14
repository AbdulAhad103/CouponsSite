"use client";
import Airtable from "airtable";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [dictionary, setDictionary] = useState([])
  const idToName = (id) => {
    if (id === "recwNHt03bNMaxEqg") return "زارا";
    if (id === "recU3rCFXf6FhhWau") return "الخطوط الجوية التركية";
    if (id === "recFd4c7bZYeDjPsD") return "السيف غاليري";
    if (id === "rec5XNRPavPNJkT9C") return "تومي هيلفيغر";
  };

  const [coupons, setCoupons] = useState([]);
  var base = new Airtable({
    apiKey:
      "pat6ctkSNfMS5DX6L.46279e5c455dfb85f9d04d3dc9914a0f5aa7c2038ab04a05a92b0f6883104094",
  }).base("appcKk3YBb5YRubtz");

  function fetchCoupons() {
    base("Discount coupon")
      .select({
        view: "Grid view",
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          try {
            const fields = record.fields;
            const obj = {
              image: fields.IMAGE[0].url,
              headline: idToName(fields.SELLER[0]),
              discountPercentage: fields.discountPercentage,
              isCoupon: true,
              couponCode: fields.DiscountCode,
              referralLink: "",
            };
            console.log(record);
            setCoupons([...coupons, obj]);
          } catch (e) {
            console.log("ERROR");
          }
        });
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      });
  }

  const [referrals, setReferrals] = useState([]);

  function fetchReferrals() {
    base("Referral links")
      .select({
        view: "Grid view",
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          try {
            const fields = record.fields;
            const obj = {
              image: fields.IMAGE[0].url,
              headline: fields.SELLER[0] === "recwNHt03bNMaxEqg" ? "زارا" : "",
              discountPercentage: fields.discountPercentage,
              isCoupon: false,
              couponCode: "",
              referralLink: fields.ReferralLinks,
            };
            setReferrals([...referrals, obj]);
          } catch (e) {
            console.log("ERROR");
          }
        });
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      });
  }

  useEffect(() => {
    idToName()
    fetchCoupons();
    fetchReferrals();
  }, []);

  return (
    <>
      <main className="relative max-w-[1658px] w-[85vw] mx-auto flex flex-col gap-[2svh] pb-52">
        <Header />
        <Pagination coupons={coupons} referrals={referrals} />
        <Footer />
      </main>
      <div className="block md:hidden h-28 md:h-24 w-full bg-[#081edd]"></div>
      <div className="h-28 md:h-24 w-full bg-[#FBC52D]"></div>
    </>
  );
}
