import { useRecoilValue, useRecoilState } from "recoil";
import { useState } from "react";
import { categoriesState, searchQueryCategory } from "../../../../states/atoms/flashcardAtoms";

export const SelectCategory = ({ currentCategory }: { currentCategory?: string }) => {
  const [categoryId, setSearchQueryCategory] = useRecoilState(searchQueryCategory);
  const categories = useRecoilValue(categoriesState);
  const [currentValue, setCurrentValue] = useState(
    categories.length !== 0 && currentCategory
      ? currentCategory
      : categories.filter((obj) => obj._id === categoryId)[0]?.category
  );
  return (
    <select
      value={currentValue}
      onChange={(e) => {
        setSearchQueryCategory(e.target.value);
        setCurrentValue(e.target.value);
      }}
      className="text-xs h-8  sm:h-10 w-full rounded-full border-none bg-white pe-10 ps-4 sm:text-sm shadow-sm sm:w-56"
    >
      <option disabled>Choose catgory</option>
      <option value="all">All</option>
      {categories?.map((cate) => (
        <option key={cate._id} value={cate._id}>
          {cate.category}
        </option>
      ))}
    </select>
  );
};
