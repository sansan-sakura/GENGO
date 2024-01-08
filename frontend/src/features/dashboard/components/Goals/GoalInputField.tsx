import { FormLabel, Input, Typography } from "@mui/joy";

import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { useEditUser } from "../../../../hooks/useEditUser";
import { User } from "../../../../types/userType";

export const GoalInputField = ({
  storedValue,
  label,
  objKey,
  centerText = true,
}: {
  storedValue?: string;
  label: string;
  objKey: string;
  centerText?: boolean;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(storedValue);
  const { editUser } = useEditUser();

  const handleUpdateGoal = () => {
    if (objKey !== "password" && (value === "" || value === storedValue)) return;
    if (objKey === "password" && value.length < 8)
      return alert("Password should be longer than 8 letters");

    if (objKey === "name" && value.length < 3) return alert("Name should be longer than 3 letters");
    const newGoal = { [objKey]: value } as User;

    editUser(newGoal);
  };

  return (
    <div className="w-full max-w-[600px] mx-auto break-words">
      {isEditing ? (
        <div
          className={`flex flex-col ${
            centerText ? "justify-center items-center" : ""
          } gap-4 relative`}
        >
          <FormLabel
            sx={{
              fontWeight: "xl",
              textTransform: "uppercase",
              fontSize: "md",
              letterSpacing: "0.5px",
            }}
          >
            {label}
          </FormLabel>
          <Input
            defaultValue={value}
            size="md"
            variant="outlined"
            sx={{ fontSize: "18px", textAlign: "center" }}
            onChange={(e) => setValue(e.target.value)}
            endDecorator={
              <button
                onClick={() => {
                  setIsEditing((prev) => !prev);
                  handleUpdateGoal();
                }}
              >
                <CheckIcon sx={{ width: "22px", color: "green" }} />
              </button>
            }
          />
        </div>
      ) : (
        <div className={`flex flex-col ${centerText ? "justify-center text-center" : ""} `}>
          <div className={`flex gap-4 items-center w-full  ${centerText ? "justify-center" : ""}`}>
            <FormLabel
              sx={{
                fontWeight: "xl",
                textTransform: "uppercase",
                fontSize: "md",
                letterSpacing: "0.5px",
              }}
            >
              {label}
            </FormLabel>
            <button onClick={() => setIsEditing((prev) => !prev)}>
              <ModeEditOutlineIcon
                sx={{
                  width: "18px",
                  color: "#888",
                  transition: "all .3s ease",
                  "&:hover": { color: "#555" },
                }}
              />
            </button>
          </div>
          <Typography
            sx={{ wordBreak: "break-word", marginTop: "18px", fontSize: "18px" }}
            onClick={() => setIsEditing(true)}
          >
            {value}
          </Typography>
        </div>
      )}
    </div>
  );
};
