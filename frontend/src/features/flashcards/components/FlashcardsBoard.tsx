import { ContentFrame } from "../../../ui/ContentFrame";
import { EditDeleteButton } from "../../../ui/EditDeleteButton";
import { Pagination } from "../../../ui/Pagination";
import { SearchInput } from "../../../ui/SearchInput";
import { useCategory } from "../hooks/category/useCategory";
import { Flashcards } from "./Flashcards";

export const FlashcardsBoard = () => {
  const { isPending, categories, error } = useCategory();
  if (isPending) return <p>Pending</p>;
  if (error) return <p>error</p>;

  return (
    <ContentFrame>
      <div className="w-full">
        <div className="flex justify-between w-[90%] mx-auto  bg-gray-50 p-10 mb-10 rounded border-2">
          <div>
            <SearchInput />
            <EditDeleteButton />
            <select className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56">
              {categories.map((cate) => (
                <option key={cate._id}>{cate.category}</option>
              ))}
            </select>
          </div>
        </div>
        <Flashcards />
        <div className="w-full flex justify-center pt-8">
          <Pagination />
        </div>
      </div>
    </ContentFrame>
  );
};
