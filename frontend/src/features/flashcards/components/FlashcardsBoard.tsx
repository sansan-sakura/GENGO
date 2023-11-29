import { useRecoilState, useSetRecoilState } from "recoil";
import { ContentFrame } from "../../../ui/ContentFrame";
import { Pagination } from "./Pagination";
import { SearchInput } from "../../../ui/SearchInput";
import { useCategory } from "../hooks/category/useCategory";
import { Flashcards } from "./Flashcards";
import { categoryState } from "../../../states/atoms/flashcardAtoms";
import { Error } from "../../../ui/Error";
import { EditBtn } from "../../../ui/EditBtn";
import { modalState } from "../../../states/atoms/commonAtoms";
import { Modal } from "../../../ui/Modal";
import { EditCategoryInputField } from "./EditCategoryInputField";

export const FlashcardsBoard = () => {
  const setCategory = useSetRecoilState(categoryState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const { isPending, categories, error } = useCategory();
  if (isPending) return <p>Pending</p>;
  if (error) return <Error />;
  setCategory(categories);

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
          <div className="flex justify-between w-[90%] mx-auto  bg-gray-50 p-10 mb-10 rounded border-2">
            <div>
              <SearchInput />
              <EditBtn handleEdit={() => setIsModalOpen(true)} />
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
    </>
  );
};
