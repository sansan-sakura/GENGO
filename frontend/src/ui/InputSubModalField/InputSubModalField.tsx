import { useState } from "react";
import { updateCategory } from "../../services/apiCategory";

export const InputSubModalField = ({ id }: { id: string | number }) => {
  const [editingValue, setEditingValue] = useState<string>("");
  const [error, setIsError] = useState<boolean>(false);
  const [onSuccess, setOnSuccess] = useState<boolean>(false);
  async function handleEditSubmit(id: string | number) {
    if (editingValue === "") return setIsError(true);
    const newCategory = { category: editingValue };
    try {
      await updateCategory(id, newCategory);
      setEditingValue("");
      setIsError(false);
      setOnSuccess(true);
    } catch (err) {
      setOnSuccess(false);
      setIsError(true);
    }
  }
  return (
    <div className="px-6 py-12">
      <input
        type="text"
        placeholder="Update..."
        className="p-3"
        onChange={(e) => setEditingValue(e.target.value)}
        value={editingValue}
      />
      <button onClick={() => handleEditSubmit(id)}>Edit</button>
      {error && <p>Please Enter a value to update!!</p>}
      {onSuccess && <p>Successfully updated!!</p>}
    </div>
  );
};
