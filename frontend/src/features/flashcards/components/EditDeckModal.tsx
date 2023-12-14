import { useState } from "react";
import { useEditDeck } from "../hooks/deck/useEditDeck";
import { Toaster } from "react-hot-toast";
import { SelectCategory } from "./SelectCategory";
import { searchQueryCategory } from "../../../states/atoms/flashcardAtoms";
import { useRecoilValue } from "recoil";

type Props = {
  id: string | undefined;
  title: string;
  category: string;
};

export const EditDeckModal = ({ id, title, category }: Props) => {
  const [titleValue, settitleValue] = useState(title);
  const categoryValue = useRecoilValue(searchQueryCategory);
  const { isEditing, editDeck } = useEditDeck();
  const handleEdit = () => {
    if (id === undefined) return;
    if (titleValue === "" || categoryValue === "") return alert("Please fill category and title");
    const newData = { title: titleValue, category: categoryValue };
    editDeck({ id, newData });
  };
  return (
    <div className="flex flex-col">
      <Toaster />

      <h2 className="text-xl text-center font-semibold mb-2">Edit</h2>
      <label htmlFor="category" className="text-lg font-semibold">
        category
      </label>
      <SelectCategory currentCategory={category} />
      <label htmlFor="title" className="text-lg font-semibold  mt-6">
        title
      </label>
      <textarea
        id="title"
        cols={20}
        rows={3}
        value={titleValue}
        onChange={(e) => settitleValue(e.target.value)}
        className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
      />

      <button
        disabled={isEditing}
        className="button bg-red-light font-semibold"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};
