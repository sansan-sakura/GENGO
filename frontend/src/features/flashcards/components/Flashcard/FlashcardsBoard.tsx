import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useMemo } from "react";

import {
  allDecksPerPageState,
  categoriesState,
  currentFlashCardPageNumState,
  flashcardsNumsPerPage,
  searchQueryCategory,
  searchQueryCreatedAt,
  searchQueryStatus,
} from "../../../../states/atoms/flashcardAtoms";

import { EditBtn } from "../../../../ui/EditBtn";
import { modalIDstate, modalState } from "../../../../states/atoms/commonAtoms";
import { Modal } from "../../../../ui/Modal";
import { ContentFrame } from "../../../../ui/ContentFrame";
import { Pagination } from "../Deck/Pagination";
import { EditCategoryInputField } from "../Category/EditCategoryInputField";
import { CreateDeckInputField } from "../Deck/CreateDeckInputField";
import { SelectCategory } from "../Category/SelectCategory";
import { useDecksWithCategory } from "../../hooks/deck/useDecksWithCategory";
import { Error } from "../../../../ui/Error";
import { DeckType } from "../../../../types/flashcardTypes";
import { Card } from "../Deck/Card";
import { Spinner } from "../../../../ui/Spinner";
import { useCategory } from "../../hooks/category/useCategory";

export const FlashcardsBoard = () => {
  const setCategories = useSetRecoilState(categoriesState);

  // for search query
  const [queryStatus, setSearchQueryStatus] = useRecoilState(searchQueryStatus);
  const [queryCreatedAt, setSearchQueryCreatedAt] = useRecoilState(searchQueryCreatedAt);
  const queryCategory = useRecoilValue(searchQueryCategory);

  // for pagination
  const currentPage = useRecoilValue(currentFlashCardPageNumState);
  const cardsNumPerPage = useRecoilValue(flashcardsNumsPerPage);

  // for modal
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const [modalID, setModalID] = useRecoilState(modalIDstate);

  const setCards = useSetRecoilState(allDecksPerPageState);

  const query = useMemo(
    () =>
      `page=${currentPage}&limit=${cardsNumPerPage}${
        queryStatus !== "" ? "&isDone=" + queryStatus : ""
      }${queryCreatedAt !== "" ? "&sort=" + queryCreatedAt : ""}`,
    [currentPage, cardsNumPerPage, queryStatus, queryCreatedAt]
  );

  const { isPending, decksWithQuery, error } = useDecksWithCategory(queryCategory, query);
  const { isPending: isCategoryPending, categories, error: categoryError } = useCategory();

  if (isPending || isCategoryPending) return <Spinner />;
  if (error || categoryError) return <Error />;
  const decksWithQueries: DeckType[] = decksWithQuery.data ? decksWithQuery?.data?.deck : [];
  setCards(decksWithQueries);
  setCategories(categories);

  function handleSetQuery(e: React.ChangeEvent<HTMLSelectElement>, label: string) {
    const handler = label === "status" ? setSearchQueryStatus : setSearchQueryCreatedAt;
    handler(e.target.value);
  }

  return (
    <>
      {isModalOpen && modalID === "edit_category" && (
        <Modal
          setIsOpenModal={setIsModalOpen}
          setModalID={setModalID}
          content={<EditCategoryInputField categories={categories} />}
        />
      )}
      {isModalOpen && modalID === "create_deck" && (
        <Modal
          setIsOpenModal={setIsModalOpen}
          setModalID={setModalID}
          content={<CreateDeckInputField />}
        />
      )}
      <ContentFrame>
        <div className="w-full">
          <div className="flex justify-around w-fit mx-auto p-3 gap-2  bg-gray-50 mb-6 md:mb-10 sm:p-6 sm:gap-3  rounded border-2">
            <div className="flex flex-col gap-2 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-base md:text-lg">Status</label>
                <select
                  value={queryStatus}
                  onChange={(e) => handleSetQuery(e, "status")}
                  className="text-xs h-8 sm:h-10 w-full rounded-full border-none bg-white pe-10 ps-4 sm:text-sm shadow-sm sm:w-56"
                >
                  <option disabled>status</option>
                  <option value="true">Done</option>
                  <option value="">Not Yet</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-base md:text-lg">Created Date</label>
                <select
                  value={queryCreatedAt}
                  onChange={(e) => handleSetQuery(e, "createdAt")}
                  className="text-xs h-8 sm:h-10 w-full rounded-full border-none bg-white pe-10 ps-4 sm:text-sm shadow-sm sm:w-56"
                >
                  <option disabled>Created Date</option>
                  <option value="-createdAt">Newer</option>
                  <option value="createdAt">Older</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-2">
                  <label className="text-xs sm:text-base md:text-lg">Catergory</label>
                  <EditBtn
                    handleEdit={() => {
                      setIsModalOpen(true);
                      setModalID("edit_category");
                    }}
                  />
                </div>
                <SelectCategory key="searchBoard" type="search" />
              </div>
              <button
                className="button mt-4 sm:mt-0"
                onClick={() => {
                  setIsModalOpen(true);
                  setModalID("create_deck");
                }}
              >
                Create a New Deck
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
            {decksWithQueries.length !== 0 ? (
              decksWithQueries?.map((card, i) => <Card card={card} key={i} index={i} />)
            ) : (
              <p className="pt-6 text-sm sm:text-base">NOT AVAILABLE 🎭</p>
            )}
          </div>
          <div className="w-full flex justify-center pt-8">
            <Pagination />
          </div>
        </div>
      </ContentFrame>
    </>
  );
};
