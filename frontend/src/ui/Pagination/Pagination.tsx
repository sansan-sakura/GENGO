import { useRecoilState, useRecoilValue } from "recoil";
import { countedCardsLength } from "../../states/selectors/flashcardSelectors";
import {
  currentFlashCardPageNumState,
  flashcardsNumsPerPage,
} from "../../states/atoms/flashcardAtoms";

export const Pagination = () => {
  const cardNumPerPage = useRecoilValue(flashcardsNumsPerPage);
  const cardNum: number | undefined = useRecoilValue(countedCardsLength);
  const [currentPage, setCurrentPage] = useRecoilState(currentFlashCardPageNumState);

  const handleClickRight = () => {
    currentPage <= Math.ceil(cardNum / cardNumPerPage) ? setCurrentPage(currentPage + 1) : "";
  };

  const handleClickLeft = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : "";
  };

  return (
    <div className="inline-flex justify-center gap-1">
      <button
        type="button"
        aria-label="go to Prev Page"
        onClick={handleClickLeft}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div>
        <label htmlFor="PaginationPage" className="sr-only">
          Page
        </label>
        <div
          className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 flex items-center justify-center"
          id="PaginationPage"
        >
          <p>{currentPage}</p>
        </div>
      </div>

      <button
        type="button"
        aria-label="go to next Page"
        onClick={handleClickRight}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
