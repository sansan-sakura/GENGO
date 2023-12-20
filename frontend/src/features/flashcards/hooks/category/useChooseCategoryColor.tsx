import { useRecoilValue } from "recoil";
import { categoryColorsState } from "../../../../states/atoms/flashcardAtoms";
import { useMemo } from "react";

export const useChooseCategoryColor = (category: string) => {
  const categoryColors = useRecoilValue(categoryColorsState);

  const categoryBgColor = useMemo(() => {
    if (!category) return;

    const selectedColor = categoryColors.find((item) => item.category.category === category);
    return selectedColor.color;
  }, [categoryColors, category]);

  return categoryBgColor;
};
