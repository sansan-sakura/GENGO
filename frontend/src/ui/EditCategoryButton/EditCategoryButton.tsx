import { CiEdit } from "react-icons/ci";
import { Modal } from "../Modal";
import { EditCategoryInputField } from "../../features/flashcards/components/EditCategoryInputField";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState } from "../../states/atoms/flashcardAtoms";
import { modalState } from "../../states/atoms/commonAtoms";

export const EditCategoryButton = () => {
  // const categories = useRecoilValue(categoryState);
  // const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  return (
    <div className="w-full text-end text-xl text-gray-500 pr-6 mt-6">
      {/* <button onClick={() => setIsModalOpen(true)}>
        <CiEdit />
      </button> */}
    </div>
  );
};
