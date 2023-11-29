import { CategoryType } from "../../../types/flashcardTypes";

import { EditCategoryModalOption } from "./EditCategoryModalOption";

export const EditCategoryInputField = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <>
      <div className="bg-white p-12  text-center">
        <h3 className=" text-green-dark text-2xl font-bold">Edit Category</h3>
        <div className="mt-4">
          {categories.map((cate) => (
            <EditCategoryModalOption cate={cate} key={cate._id} />
          ))}
        </div>
      </div>
    </>
  );
};
