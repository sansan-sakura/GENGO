import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { useEditUser } from "../../../../hooks/useEditUser";
import { User } from "../../../../types/userType";

import { Label } from "../../../../ui/shadcn/Label";
import { Textarea } from "../../../../ui/shadcn/Textarea";

export const GoalInputField = ({
  storedValue,
  label,
  objKey,
}: {
  storedValue?: string;
  label: string;
  objKey: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(storedValue);
  const { editUser } = useEditUser();

  const handleUpdateGoal = () => {
    const newGoal = { [objKey]: value } as User;

    editUser(newGoal);
    console.log("set,", newGoal);
  };

  return (
    <div className="w-fit mx-auto break-words">
      {isEditing ? (
        <div className={`flex flex-col gap-2 relative border border-gray-200 p-2 rounded-sm`}>
          <button
            className="p-1.5 bg-blue-dark w-7 h-7 absolute top-1 right-1 flex items-center justify-center rounded-full"
            onClick={() => {
              setIsEditing((prev) => !prev);
              handleUpdateGoal();
            }}
          >
            <CheckIcon
              sx={{
                width: "22px",
                color: "#fff",
              }}
            />
          </button>
          <Label className="text-xs sm:text-sm font-semibold">{label}</Label>
          <div className="flex">
            <Textarea
              defaultValue={value}
              onChange={(e) => setValue(e.target.value)}
              className=" w-[350px] md:w-[400px] "
            />
          </div>
        </div>
      ) : (
        <div className={`flex flex-col gap-2 relative border border-gray-200 p-2 rounded-sm`}>
          <button
            className="p-1.5 bg-gray-100 w-8 h-8 absolute top-2 right-2 flex items-center justify-center rounded-full"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <ModeEditOutlineIcon
              sx={{
                width: "18px",
                color: "#888",
                transition: "all .3s ease",
                "&:hover": { color: "#555" },
                position: "absolute",
                top: "5px",
                right: "5px",
              }}
            />
          </button>
          <Label className="text-xs sm:text-sm font-semibold"> {label}</Label>
          <div className="flex  w-[350px] md:w-[400px] ">
            <div
              className={`flex gap-1 flex-col w-[350px] md:w-[400px] h-[100px] md:h-[150px] my-2`}
            >
              {value}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
