import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ContentFrame } from "../../../ui/ContentFrame";
import { Pagination } from "./Pagination";
import { Flashcards } from "./Flashcards";
import {
  categoryState,
  searchQueryCreatedAt,
  searchQueryStatus,
} from "../../../states/atoms/flashcardAtoms";
import { EditBtn } from "../../../ui/EditBtn";
import { modalIDstate, modalState } from "../../../states/atoms/commonAtoms";
import { Modal } from "../../../ui/Modal";
import { EditCategoryInputField } from "./EditCategoryInputField";
import { CreateDeckInputField } from "./CreateDeckInputField";
import { SelectCategory } from "./SelectCategory";

export const FlashcardsBoard = () => {
  const categories = useRecoilValue(categoryState);
  const setSearchQueryStatus = useSetRecoilState(searchQueryStatus);
  const setSearchQueryCreatedAt = useSetRecoilState(searchQueryCreatedAt);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const [modalID, setModalID] = useRecoilState(modalIDstate);

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
          <Flashcards />
          <div className="w-full flex justify-center pt-8">
            <Pagination />
          </div>
        </div>
      </ContentFrame>
    </>
  );
};
