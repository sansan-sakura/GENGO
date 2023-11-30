import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ContentFrame } from "../../../ui/ContentFrame";
import { Pagination } from "./Pagination";
import { Flashcards } from "./Flashcards";
import {
  categoryState,
  searchQueryCategory,
  searchQueryCreatedAt,
  searchQueryStatus,
} from "../../../states/atoms/flashcardAtoms";
import { EditBtn } from "../../../ui/EditBtn";
import { modalState } from "../../../states/atoms/commonAtoms";
import { Modal } from "../../../ui/Modal";
import { EditCategoryInputField } from "./EditCategoryInputField";

export const FlashcardsBoard = () => {
  const categories = useRecoilValue(categoryState);
  const setSearchQueryCategory = useSetRecoilState(searchQueryCategory);
  const setSearchQueryStatus = useSetRecoilState(searchQueryStatus);
  const setSearchQueryCreatedAt = useSetRecoilState(searchQueryCreatedAt);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  function handleSetQuery(e: React.ChangeEvent<HTMLSelectElement>, label: string) {
    const handler =
      label === "category"
        ? setSearchQueryCategory
        : label === "status"
        ? setSearchQueryStatus
        : setSearchQueryCreatedAt;

    handler(e.target.value);
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          setIsOpenModal={setIsModalOpen}
          content={<EditCategoryInputField categories={categories} />}
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
                  <EditBtn handleEdit={() => setIsModalOpen(true)} />
                </div>
                <select
                  onChange={(e) => handleSetQuery(e, "category")}
                  className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                >
                  <option disabled>Choose catgory</option>
                  {categories.map((cate) => (
                    <option key={cate._id} value={cate._id}>
                      {cate.category}
                    </option>
                  ))}
                </select>
              </div>
              <button className="button">Create a New Deck</button>
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
