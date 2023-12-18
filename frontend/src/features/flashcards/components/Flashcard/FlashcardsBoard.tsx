import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ContentFrame } from "../../../../ui/ContentFrame";
import { Pagination } from "../Deck/Pagination";

import {
  allDecksPerPageState,
  categoryState,
  currentFlashCardPageNumState,
  flashcardsNumsPerPage,
  searchQuery,
  searchQueryCategory,
  searchQueryCreatedAt,
  searchQueryStatus,
} from "../../../../states/atoms/flashcardAtoms";
import { EditBtn } from "../../../../ui/EditBtn";
import { modalIDstate, modalState } from "../../../../states/atoms/commonAtoms";
import { Modal } from "../../../../ui/Modal";
import { EditCategoryInputField } from "../Category/EditCategoryInputField";
import { CreateDeckInputField } from "../Deck/CreateDeckInputField";
import { SelectCategory } from "../Category/SelectCategory";
import { useEffect, useMemo } from "react";
import { useDecksWithCategory } from "../../hooks/deck/useDecksWithCategory";
import { Error } from "../../../../ui/Error";
import { DeckType } from "../../../../types/flashcardTypes";
import { Card } from "../Deck/Card";
import { categoriesState } from "../../../../states/selector/flashcardSelector";

export const FlashcardsBoard = () => {
  const categories = useRecoilValue(categoriesState);

  // for search query
  const [queryStatus, setSearchQueryStatus] = useRecoilState(searchQueryStatus);
  const [queryCreatedAt, setSearchQueryCreatedAt] = useRecoilState(searchQueryCreatedAt);
  const queryCategory = useRecoilValue(searchQueryCategory);
  const setSearchQuery = useSetRecoilState(searchQuery);
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

  useEffect(() => {
    setSearchQuery(query);
  }, [query, setSearchQuery]);

  console.log(queryCategory, query);
  const { isPending, decksWithQuery, error } = useDecksWithCategory(queryCategory, query);
  console.log(decksWithQuery);
  if (isPending) return <p>Loading</p>;
  if (error) return <Error />;
  const decksWithQueries: DeckType[] = decksWithQuery.data ? decksWithQuery?.data?.deck : [];
  setCards(decksWithQueries);

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
          <div className="flex justify-around w-[90%] mx-auto  bg-gray-50  mb-10 rounded border-2 p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label>Status</label>
                <select
                  value={queryStatus}
                  onChange={(e) => handleSetQuery(e, "status")}
                  className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                >
                  <option disabled>status</option>
                  <option value="true">Done</option>
                  <option value="">Not Yet</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Created Date</label>
                <select
                  value={queryCreatedAt}
                  onChange={(e) => handleSetQuery(e, "createdAt")}
                  className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
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
                  <label>Catergory</label>
                  <EditBtn
                    handleEdit={() => {
                      setIsModalOpen(true);
                      setModalID("edit_category");
                    }}
                  />
                </div>
                <SelectCategory />
              </div>
              <button
                className="button"
                onClick={() => {
                  setIsModalOpen(true);
                  setModalID("create_deck");
                }}
              >
                Create a New Deck
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 justify-items-center">
            {decksWithQueries.length !== 0 ? (
              decksWithQueries?.map((card, i) => <Card card={card} key={i} bg="bg-blue-default" />)
            ) : (
              <p>There is no matched deck</p>
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