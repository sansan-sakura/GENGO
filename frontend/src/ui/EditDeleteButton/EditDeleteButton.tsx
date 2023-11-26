import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";

export const EditDeleteButton = () => {
  return (
    <div className="w-full text-end text-xl text-gray-500 pr-6 mt-6">
      <button>
        <CiEdit />
      </button>
      <button className="ml-4">
        <RiDeleteBin3Line />
      </button>
    </div>
  );
};
