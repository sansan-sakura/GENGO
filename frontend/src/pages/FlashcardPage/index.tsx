import { FlashcardsBoard } from "../../features/flashcards";
import { useCategory } from "../../features/flashcards/hooks/category/useCategory";
import { useSetRecoilState } from "recoil";
import { categoryState, searchQueryCategory } from "../../states/atoms/flashcardAtoms";
import { Error } from "../../ui/Error";

export const FlashcardPage = () => {
  const setCategory = useSetRecoilState(categoryState);
  const setSearchQueryCategory = useSetRecoilState(searchQueryCategory);
  const { isPending, categories, error } = useCategory();
  if (isPending) return <p>Pending</p>;
  if (error) return <Error />;

  setCategory(categories);
  setSearchQueryCategory(categories.length !== 0 ? categories[0]._id : "");
  return (
    <section className="section-layout">
      <FlashcardsBoard />
    </section>
  );
};
