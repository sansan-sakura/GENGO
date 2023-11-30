import { useRecoilValue, useRecoilState } from "recoil";
import { useState } from "react";
import { categoryState, searchQueryCategory } from "../../../states/atoms/flashcardAtoms";

export const SelectCategory = () => {
  const [categoryId, setSearchQueryCategory] = useRecoilState(searchQueryCategory);
  const categories = useRecoilValue(categoryState);
  const [currentValue, setCurrentValue] = useState(
    categories.filter((obj) => obj._id === categoryId)[0].category
  );

  return (
    <select
      value={currentValue}
      onChange={(e) => {
        setSearchQueryCategory(e.target.value);
        setCurrentValue(e.target.value);
      }}
      className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
    >
      <option disabled>Choose catgory</option>
      {categories.map((cate) => (
        <option key={cate._id} value={cate._id}>
          {cate.category}
        </option>
      ))}
    </select>
  );
};
