import { CategoryType } from "../../../../types/flashcardTypes";
import { SubModal } from "../../../../ui/SubModal";
import { InputSubModalField } from "./InputSubModalField";
import { DeleteBtn } from "../../../../ui/DeleteBtn";
import { EditBtn } from "../../../../ui/EditBtn";
import { useState } from "react";
import { useDeleteCategory } from "../../hooks/category/useDeleteCategory";
import { Toaster } from "react-hot-toast";

export const EditCategoryModalOption = ({ cate }: { cate: CategoryType }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const { deleteCategory } = useDeleteCategory();
  const handledelete = () => {
    deleteCategory(cate._id);
  };

  return (
    <>
      <Toaster />
      {isSubOpen && (
        <SubModal
          content={
            <InputSubModalField id={cate._id} onClose={setIsSubOpen} defaultValue={cate.category} />
          }
          setIsSubOpen={setIsSubOpen}
        />
      )}
      <div className="flex justify-between items-center text-xl gap-3 p-2 mb-2">
        <p key={cate._id} className="text-base sm:text-lg">
          {cate.category}
        </p>
        <div className="flex items-center gap-2">
          <EditBtn handleEdit={() => setIsSubOpen(true)} />
          <DeleteBtn handleDelete={handledelete} />
        </div>
      </div>
    </>
  );
};
