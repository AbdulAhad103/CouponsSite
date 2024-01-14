"use client";
import { useState } from "react";
import PaginationBtn from "./PaginationBtn";
import CategoryPage from "./CategoryPage";
import Search from "./Search";

const Pagination = () => {
  // Page Number
  const [activeIndex, setActiveIndex] = useState(6);

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
      <CategoryPage activeCategory={activeIndex} />
    </div>
  );
};

const RenderPaginationBtns = ({ activeIndex, changeIndex }) => {
  const [categories, setCategories] = useState([
    "أخرى",
    "مواد بناء",
    "سوبر ماركت",
    "السفر",
    "الأواني",
    "العطور",
    "الجمال",
    "المطاعم",
    "التسوق",
  ]);
  return (
    <div className="w-full overflow-x-scroll flex justify-between items-center">
      {categories.map((category, index) => {
        let isActive = false;
        if (index === activeIndex) isActive = true;
        return (
          <PaginationBtn
            key={index}
            active={isActive}
            changeIndex={() => changeIndex(index)}
          >
            {category}
          </PaginationBtn>
        );
      })}
    </div>
  );
};

export default Pagination;
