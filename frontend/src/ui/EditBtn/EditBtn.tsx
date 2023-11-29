import { CiEdit } from "react-icons/ci";
export const EditBtn = ({ handleEdit }: { handleEdit: () => void }) => {
  return (
    <button className="w-full text-end text-xl text-gray-500 pr-6 mt-6" onClick={handleEdit}>
      <CiEdit />
    </button>
  );
};
