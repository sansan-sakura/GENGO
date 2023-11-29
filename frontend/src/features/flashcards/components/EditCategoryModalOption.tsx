import { CategoryType } from "../../../types/flashcardTypes";
import { SubModal } from "../../../ui/SubModal";
import { InputSubModalField } from "./InputSubModalField";
import { DeleteBtn } from "../../../ui/DeleteBtn";
import { EditBtn } from "../../../ui/EditBtn";
import { useState } from "react";

export const EditCategoryModalOption = ({ cate }: { cate: CategoryType }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <>
      {isSubOpen && (
        <SubModal
          content={<InputSubModalField id={cate._id} onClose={setIsSubOpen} />}
          setIsSubOpen={setIsSubOpen}
        />
      )}
      <div className="flex justify-between items-center text-xl gap-3 p-2 mb-2">
        <p key={cate._id}>{cate.category}</p>
        <div className="flex items-center">
          <EditBtn handleEdit={() => setIsSubOpen(true)} />
          <DeleteBtn handleDelete={() => console.log("deleted")} />
        </div>
      </div>
    </>
  );
};
