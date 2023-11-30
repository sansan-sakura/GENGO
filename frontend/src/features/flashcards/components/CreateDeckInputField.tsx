import { useState } from "react";
import { SelectCategory } from "./SelectCategory";
import { useCreateDeck } from "../hooks/deck/useCreateDeck";
import { searchQueryCategory } from "../../../states/atoms/flashcardAtoms";
import { useRecoilValue } from "recoil";
import { Toaster } from "react-hot-toast";

export const CreateDeckInputField = () => {
  const { isCreating, createDeck } = useCreateDeck();
  const categoryId = useRecoilValue(searchQueryCategory);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title === "") return setError(true);
    createDeck({ title: title, category: categoryId });
    setTitle("");
    setError(false);
  };

  return (
    <form className="p-3">
      <Toaster />
      <h2 className="text-center mb-8 text-2xl font-semibold text-green-dark">Create a new Deck</h2>
      <div className="flex flex-col justify-around gap-6">
        <div className="grid gap-4 ">
          <h3 className="ml-2">Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-lg shadow-sm sm:w-56"
            type="text"
            disabled={isCreating}
            placeholder="
      Title..."
          />
        </div>
        <div className="grid gap-4 ">
          <h3 className="ml-2">Choose Category</h3>
          <SelectCategory />
        </div>
        <button className="button mx-auto" onClick={handleSubmit}>
          Create
        </button>
        {error && <p>Please fill first</p>}
      </div>
    </form>
  );
};
