import { Typography } from "@mui/joy";
import { InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { useEditUser } from "../../../../hooks/useEditUser";

export const GoalInputField = ({
  storedValue,
  label,
  objKey,
}: {
  storedValue: string;
  label: string;
  objKey: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(storedValue);
  const { isEditing: isUserEditing, editUser } = useEditUser();

  const handleUpdateGoal = () => {
    if (value === "" || value === storedValue) return;
    const newGoal = { [objKey]: value };
    console.log(newGoal, objKey);
    editUser(newGoal);
  };

  return (
    <div className="w-full">
      {isEditing ? (
        <div className="grid gap-2 relative">
          <TextField
            variant="outlined"
            defaultValue={value}
            label={label}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <button
                  onClick={() => {
                    setIsEditing((prev) => !prev);
                    handleUpdateGoal();
                  }}
                >
                  <CheckIcon sx={{ width: "18px", color: "#888" }} />
                </button>
              ),
            }}
          />
        </div>
      ) : (
        <>
          <InputLabel sx={{ fontSize: "14px" }}>{label}</InputLabel>
          <Typography
            sx={{ wordBreak: "break-word", marginTop: "6px" }}
            onClick={() => setIsEditing(true)}
            endDecorator={
              <button onClick={() => setIsEditing((prev) => !prev)}>
                <ModeEditOutlineIcon sx={{ width: "18px", color: "#888" }} />
              </button>
            }
          >
            {value}
          </Typography>
        </>
      )}
    </div>
  );
};
