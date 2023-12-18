import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { searchQueryCategory } from "../../../../states/atoms/flashcardAtoms";
import {
  categoriesState,
  initialQueryCategoryState,
} from "../../../../states/selector/flashcardSelector";

export const SelectCategory = ({ currentCategory }: { currentCategory?: string }) => {
  const [categoryId, setSearchQueryCategory] = useRecoilState(searchQueryCategory);
  const categories = useRecoilValue(categoriesState);
  const initialCategoiry = useRecoilValue(initialQueryCategoryState);
  const [currentValue, setCurrentValue] = useState(
    categories && currentCategory
      ? currentCategory
      : categories.filter((obj) => obj._id === categoryId)[0]?.category
  );

  useEffect(() => {
    setSearchQueryCategory(initialCategoiry);
  }, []);

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
      <option value="all">All</option>
      {categories?.map((cate) => (
        <option key={cate._id} value={cate._id}>
          {cate.category}
        </option>
      ))}
    </select>
  );
};
