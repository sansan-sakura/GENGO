import { useRecoilValue } from "recoil";
import { categoriesState } from "../../../../states/atoms/flashcardAtoms";
import { useMemo } from "react";
import { getCategories } from "../../../../services/apiCategory";
import { chooseColors } from "../../../../utils/helpers";

import { useCategory } from "./useCategory";

export const useChooseCategoryColor = (category: string) => {
  const { isPending, categories, error } = useCategory();

  if (isPending || error || !categories.length) return;

  const categoryBgColors = chooseColors(categories);
  const categoryColor = categoryBgColors.find((item) => item.category.category === category);

  return categoryColor;
};
