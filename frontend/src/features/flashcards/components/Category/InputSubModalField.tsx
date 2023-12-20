import { useState } from "react";
import { useEditCategory } from "../../hooks/category/useEditCategory";
import { Toaster } from "react-hot-toast";
import { useCreateCategory } from "../../hooks/category/useCreateCategory";

export const InputSubModalField = ({
  id,
  onClose,
  defaultValue,
}: {
  id?: string | number;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValue?: string;
}) => {
  const [editingValue, setEditingValue] = useState<string>(defaultValue);
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
    setError(false);
    onClose(false);
  }

  return (
    <>
      <Toaster />
      <h2 className=" text-red-dark text-lg sm:text-2xl font-semibold text-center">
        {id ? "Edit a Category" : "Create a Category"}
      </h2>
      <div className="px-3 sm:px-6 py-8 sm:py-12 flex flex-col">
        {error && <p className="text-sm text-red-dark">Please enter a value 🖊️</p>}
        <input
          type="text"
          placeholder="Update..."
          className="px-4 py-2 text-sm sm:text-base  border-2 border-stone-800 rounded-lg focus:outline-3 focus:outline-green-dark w-full"
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
