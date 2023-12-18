import { selector } from "recoil";
import { getCategories } from "../../services/apiCategory";

export const categoriesState = selector({
  key: "categories",
  get: async () => {
    const data = await getCategories();
    return data.data.categories;
  },
});

export const initialQueryCategoryState = selector({
  key: "initialQueryCategory",
  get: ({ get }) => {
    const categoriesArr = get(categoriesState);
    return categoriesArr.length !== 0 ? categoriesArr[0]._id : "all";
  },
});
