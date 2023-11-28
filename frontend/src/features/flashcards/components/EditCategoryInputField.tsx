import { CategoryType } from "../../../types/flashcardTypes";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import createSubModal from "../../../ui/SubModal";
import { InputSubModalField } from "../../../ui/InputSubModalField";

export const EditCategoryInputField = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <div className="bg-white p-6  text-center">
      <h3 className=" text-green-dark text-xl font-bold">Edit Category</h3>

      <div className="mt-4">
        {categories.map((cate) => (
          <div className="flex justify-between items-center text-xl gap-3 p-2 mb-2">
            <p key={cate._id}>{cate.category}</p>
            <div className="flex items-center">
              <button
                className="text-blue-default"
                onClick={() => createSubModal(<InputSubModalField id={cate._id} />)}
              >
                <CiEdit />
              </button>
              <button className="ml-4 text-red-dark">
                <RiDeleteBin3Line />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
