"use client";
import { useEffect, useState } from "react";
import Airtable from "airtable";
import DiscountCard from "./DiscountCard";

const CategoryPage = ({ activeCategory }) => {
  const idToName = (id) => {
    if (id === "recwNHt03bNMaxEqg") return "زارا";
    if (id === "recU3rCFXf6FhhWau") return "الخطوط الجوية التركية";
    if (id === "recFd4c7bZYeDjPsD") return "السيف غاليري";
    if (id === "rec5XNRPavPNJkT9C") return "تومي هيلفيغر";
  };

  const [currId, setCurrId] = useState();

  const idToCategory = (base, category) => {
    base("CATEGORY")
      .select({
        view: "Grid view",
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          try {
            const field = record.get("Name");
            if (field && field === category) {
              console.log("FI", record.id);
              setCurrId(record.id);
            }
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
  };

  const [coupons, setCoupons] = useState([]);
  function fetchCoupons(base) {
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
              category: fields.Category[0],
              couponCode: fields.DiscountCode,
              referralLink: "",
            };
            // console.log(record);
            console.log(obj);
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

  function fetchReferrals(base) {
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
              headline: idToName(fields.SELLER[0]),
              discountPercentage: fields.discountPercentage,
              category: fields.Category[0],
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
    var base = new Airtable({
      apiKey:
        "pat6ctkSNfMS5DX6L.46279e5c455dfb85f9d04d3dc9914a0f5aa7c2038ab04a05a92b0f6883104094",
    }).base("appcKk3YBb5YRubtz");
    idToCategory(base, activeCategory);
    console.log(activeCategory);
    fetchCoupons(base);
    fetchReferrals(base);
  }, []);

  useEffect(() => {
    console.log(activeCategory);
    var base = new Airtable({
      apiKey:
        "pat6ctkSNfMS5DX6L.46279e5c455dfb85f9d04d3dc9914a0f5aa7c2038ab04a05a92b0f6883104094",
    }).base("appcKk3YBb5YRubtz");
    idToCategory(base, activeCategory);
    console.log("CURR:", currId);
  }, [activeCategory]);

  return (
    <div>
      <h2 className="text-right text-4xl mb-2">كوبونات الخصم</h2>
      <h3 className="text-right text-[#9A9A9A] text-3xl mb-10">جرب التوفير</h3>
      <div className="flex justify-end gap-3 items-center flex-wrap max-w-[1658px]">
        {coupons.map((coupon, index) => {
          if (coupon.category === currId) {
            return <DiscountCard {...coupon} key={index} />;
          } else <></>;
        })}
      </div>
      <h2 className="text-right text-4xl mb-2 mt-24">عروض المتاجر</h2>
      <h3 className="text-right text-[#9A9A9A] text-3xl mb-10">متاجر مميزة</h3>
      <div className="flex justify-end gap-3 items-center flex-wrap max-w-[1658px]">
        {referrals.map((referral, index) => {
          if (referral.category === currId) {
            return <DiscountCard {...referral} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
