import { useState } from "react";
import { useEditCategory } from "../hooks/category/useEditCategory";
import { ButtonOutline } from "../../../ui/ButtonOutline";

export const InputSubModalField = ({
  id,
  onClose,
}: {
  id: string | number;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [editingValue, setEditingValue] = useState<string>("");
  const { isEditing, editCategory } = useEditCategory();

  async function handleEditSubmit(id: string | number) {
    if (editingValue === "") return;
    const newData = { category: editingValue };
    editCategory({ id, newData });
    setEditingValue("");
    onClose(false);
  }
  return (
    <div className="px-6 py-4 flex flex-col gap-6 ">
      <input
        type="text"
        placeholder="Update..."
        className="p-4 text-lg border-2 border-stone-800 rounded-lg focus:outline-3 focus:outline-green-dark"
        onChange={(e) => setEditingValue(e.target.value)}
        value={editingValue}
        disabled={isEditing}
      />
      <ButtonOutline
        name="  Edit"
        bg={"bg-green-dark"}
        type="click"
        clickHandler={() => handleEditSubmit(id)}
      />
    </div>
  );
};
