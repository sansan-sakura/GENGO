import { RiDeleteBin3Line } from "react-icons/ri";
export const DeleteBtn = ({ handleDelete }: { handleDelete: () => void }) => {
  return (
    <button className="ml-4 text-red-dark" onClick={handleDelete}>
      <RiDeleteBin3Line />
    </button>
  );
};
