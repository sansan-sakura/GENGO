import { CategoryType } from "../../../types/flashcardTypes";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { SubModal } from "../../../ui/SubModal";

import { EditCategoryModalOption } from "./EditCategoryModalOption";

import { InputSubModalField } from "./InputSubModalField";

export const EditCategoryInputField = ({ categories }: { categories: CategoryType[] }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  return (
    <>
      <Toaster />
      {isSubOpen && (
        <SubModal
          content={<InputSubModalField onClose={setIsSubOpen} />}
          setIsSubOpen={setIsSubOpen}
        />
      )}
      <div className="bg-white p-10  text-center">
        <h3 className=" text-green-dark text-2xl font-bold">Edit Category</h3>
        <div className="mt-4">
          {categories.map((cate) => (
            <EditCategoryModalOption cate={cate} key={cate._id} />
          ))}
        </div>
        <button className="button mt-6" onClick={() => setIsSubOpen(true)}>
          Create a new Category
        </button>
      </div>
    </>
  );
};
