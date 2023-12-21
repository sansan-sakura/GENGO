import { useState } from "react";
import { Toaster } from "react-hot-toast";

import { CategoryType } from "../../../../types/flashcardTypes";
import { SubModal } from "../../../../ui/SubModal";
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
      <div className="bg-white p-4 sm:p-10  text-center">
        <h3 className=" text-red-dark text-lg sm:text-2xl font-semibold">Category Setting</h3>
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
