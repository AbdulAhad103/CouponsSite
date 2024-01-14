"use client";
import { useState, useEffect } from "react";
import Airtable from "airtable";
import PaginationBtn from "./PaginationBtn";
import CategoryPage from "./CategoryPage";
import Search from "./Search";

const Pagination = ({ coupons, referrals }) => {
  // Page Number
  const [activeIndex, setActiveIndex] = useState('المطاعم');

  const changeIndex = (index) => {
    setActiveIndex(index);
  };

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col md:flex-col-reverse gap-5">
        <RenderPaginationBtns
          activeIndex={activeIndex}
          changeIndex={changeIndex}
        />
        <Search setSearch={setSearch} />
      </div>
      <CategoryPage activeCategory={activeIndex} coupons={coupons} referrals={referrals} />
    </div>
  );
};

const RenderPaginationBtns = ({ activeIndex, changeIndex }) => {
  const [categories, setCategories] = useState([])
  const [categoryIDs, setCategoryIDs] = useState("")
  function fetchCategories(base) {
    base("CATEGORY")
      .select({
        view: "Grid view",
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          try {
            const field = record.get("Name")
            if(field){
              setCategories(categories => [...categories, field])
              setCategoryIDs(categoryIDs => [...categoryIDs, record.id])
            }
          } catch (e) {
            console.log("Record doesn't exist.");
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
  useEffect(()=> {
    var base = new Airtable({
      apiKey:
        "pat6ctkSNfMS5DX6L.46279e5c455dfb85f9d04d3dc9914a0f5aa7c2038ab04a05a92b0f6883104094",
    }).base("appcKk3YBb5YRubtz");
    fetchCategories(base);
  }, [])
  return (
    <div className="pagination w-full overflow-x-scroll flex justify-between items-center">
      {[...new Set(categories)].map((category, index) => {
        let isActive = false;
        if (category === activeIndex) isActive = true;
        return (
          <PaginationBtn
            key={index}
            active={isActive}
            changeIndex={() => changeIndex(category)}
          >
            {category}
          </PaginationBtn>
        );
      })}
    </div>
  );
};

export default Pagination;
