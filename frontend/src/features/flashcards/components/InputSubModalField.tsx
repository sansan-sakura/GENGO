import { useState } from "react";
import { useEditCategory } from "../hooks/category/useEditCategory";
import { Toaster } from "react-hot-toast";
import { useCreateCategory } from "../hooks/category/useCreateCategory";

export const InputSubModalField = ({
  id,
  onClose,
}: {
  id?: string | number;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [editingValue, setEditingValue] = useState<string>("");
  const { isEditing, editCategory } = useEditCategory();
  const { isCreating, createCategory } = useCreateCategory();
  const [error, setError] = useState(false);

  function handleEditSubmit(id: string | number) {
    if (editingValue === "") return setError(true);
    const newData = { category: editingValue };
    editCategory({ id, newData });
    setEditingValue("");
    setError(false);
    onClose(false);
  }

  function handleCreate() {
    if (editingValue === "") return setError(true);
    createCategory({ category: editingValue });
  }

  return (
    <>
      <Toaster />
      <div className="px-6 py-12 flex flex-col">
        {error && <p className="text-sm text-green-950">Please enter a value 🖊️</p>}
        <input
          type="text"
          placeholder="Update..."
          className="p-4 border-2 border-stone-800 rounded-lg focus:outline-3 focus:outline-green-dark"
          onChange={(e) => setEditingValue(e.target.value)}
          value={editingValue}
          disabled={id ? isEditing : isCreating}
        />
        <button onClick={id ? () => handleEditSubmit(id) : handleCreate} className="button mt-8">
          {id ? "Edit" : "Create"}
        </button>
      </div>
    </>
  );
};
