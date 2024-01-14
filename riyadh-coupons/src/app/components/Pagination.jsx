"use client";
import { useState } from "react";
import PaginationBtn from "./PaginationBtn";
import CategoryPage from "./CategoryPage";

const Pagination = () => {
  const [activeIndex, setActiveIndex] = useState(6);

  const changeIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex flex-col gap-7">
      <RenderPaginationBtns
        activeIndex={activeIndex}
        changeIndex={changeIndex}
      />
      <CategoryPage activeCategory={activeIndex} />
    </div>
  );
};

const RenderPaginationBtns = ({ activeIndex, changeIndex }) => {
  const [categories, setCategories] = useState([
    "التسوق",
    "المطاعم",
    "الجمال",
    "العطور",
    "الأواني",
    "السفر",
    "سوبر ماركت",
    "مواد بناء",
    "أخرى",
  ]);
  return (
    <div className="w-full flex justify-between items-center">
      {[...categories].reverse().map((category, index) => {
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
