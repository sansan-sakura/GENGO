import { ContentFrame } from "../../../ui/ContentFrame";
import { Pagination } from "../../../ui/Pagination";
import { SearchInput } from "../../../ui/SearchInput";
import { Flashcards } from "./Flashcards";

export const FlashcardsBoard = () => {
  return (
    <ContentFrame>
      <div className="w-full">
        <div className="flex justify-between w-[90%] mx-auto  bg-gray-50 p-10 mb-10 rounded border-2">
          <SearchInput />
          <select className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56">
            <option>Category</option>
            <option>English</option>
            <option>Swedish</option>
            <option>German</option>
          </select>
        </div>
        <Flashcards />
        <div className="w-full flex justify-center pt-8">
          <Pagination />
        </div>
      </div>
    </ContentFrame>
  );
};
