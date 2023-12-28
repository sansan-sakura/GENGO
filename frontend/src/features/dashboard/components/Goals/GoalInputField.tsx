import { FormLabel, Input, Typography } from "@mui/joy";

import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { useEditUser } from "../../../../hooks/useEditUser";
import { z } from "zod";

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
    if (objKey !== "password" && (value === "" || value === storedValue)) return;
    if (objKey === "password" && value.length < 8)
      return alert("Password should be longer than 8 letters");

    if (objKey === "name" && value.length < 3) return alert("Name should be longer than 3 letters");
    const newGoal = { [objKey]: value };

    editUser(newGoal);
  };

  return (
    <div className="w-full">
      {isEditing ? (
        <div className="grid gap-2 relative">
          <FormLabel
            sx={{
              mb: 1.5,
              fontWeight: "xl",
              textTransform: "uppercase",
              fontSize: "xs",
              letterSpacing: "0.1em",
            }}
          >
            {label}
          </FormLabel>
          <Input
            defaultValue={value}
            size="sm"
            variant="plain"
            onChange={(e) => setValue(e.target.value)}
            endDecorator={
              <button
                onClick={() => {
                  setIsEditing((prev) => !prev);
                  handleUpdateGoal();
                }}
              >
                <CheckIcon sx={{ width: "18px", color: "green" }} />
              </button>
            }
          />
        </div>
      ) : (
        <>
          <div className=" flex items-center gap-2">
            <FormLabel
              sx={{
                fontWeight: "xl",
                textTransform: "uppercase",
                fontSize: "xs",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </FormLabel>
            <button onClick={() => setIsEditing((prev) => !prev)}>
              <ModeEditOutlineIcon sx={{ width: "15px", color: "#888" }} />
            </button>
          </div>
          <Typography
            sx={{ wordBreak: "break-word", marginTop: "6px" }}
            onClick={() => setIsEditing(true)}
          >
            {value}
          </Typography>
        </>
      )}
    </div>
  );
};
