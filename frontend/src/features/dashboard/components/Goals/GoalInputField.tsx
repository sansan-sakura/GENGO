import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { useEditUser } from "../../../../hooks/useEditUser";
import { User } from "../../../../types/userType";

import { Label } from "../../../../ui/shadcn/Label";
import { Textarea } from "../../../../ui/shadcn/Textarea";
import { Button } from "../../../../ui/shadcn/Button";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";
import { GithubPicker, SketchPicker } from "react-color";

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
  const [selectedColor, setSelectedColor] = useState({ background: "" });

  const handleUpdateGoal = () => {
    const newGoal = { [objKey]: value } as User;
    editUser(newGoal);
  };

  return (
    <Draggable cancel="strong" bounds="parent">
      <div className={`w-fit absolute`} style={{ background: selectedColor.background }}>
        <div className="w-fit mx-auto break-words">
          {isEditing ? (
            <div className={`flex flex-col gap-2 relative border border-gray-200 p-2 rounded-sm`}>
              <ResizableBox
                width={300}
                height={180}
                handle={
                  <span className="w-4 h-4 bg-red-500 absolute bottom-0 right-0 cursor-se-resize"></span>
                }
              >
                <Button
                  variant="secondary"
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
                </Button>
                <GithubPicker
                  color={selectedColor.background}
                  onChangeComplete={(color) => setSelectedColor({ background: color.hex })}
                />
                <Label className="text-xs sm:text-sm font-semibold">{label}</Label>
                <div className="flex">
                  <Textarea
                    defaultValue={value}
                    onChange={(e) => setValue(e.target.value)}
                    className=" w-[350px] md:w-[400px] "
                  />
                </div>{" "}
              </ResizableBox>
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
      </div>
    </Draggable>
  );
};
