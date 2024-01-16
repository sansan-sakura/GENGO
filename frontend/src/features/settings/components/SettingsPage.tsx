import { useState } from "react";
import { z } from "zod";
import { Box, FormLabel, RadioGroup, Sheet, Radio } from "@mui/joy";
import Done from "@mui/icons-material/Done";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { radioClasses } from "@mui/joy/Radio";

import { useUser } from "../../../hooks/useUser";
import { ContentFrame } from "../../../ui/layoutsparts/ContentFrame";
import { Spinner } from "../../../ui/generic/Spinner";
import { useEditUser } from "../../../hooks/useEditUser";
import { InputUser } from "./InputUser";
import { Label } from "../../../ui/shadcn/Label";
import { Input } from "../../../ui/shadcn/Input";
import { Button } from "../../../ui/shadcn/Button";

export const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [theme, setTheme] = useState("");
  const { isPending, data } = useUser();
  const { editUser } = useEditUser();
  if (isPending) return <Spinner />;
  const userData = data.data.data;

  const handleUpdatePassword = () => {
    const PASSWORD_SCHEMA = z
      .object({
        password: z
          .string({ required_error: "password is required" })
          .min(8, { message: "password should be longer than 8 letters" }),
        passwordConfirm: z
          .string({ required_error: "please confirm your password" })
          .min(8, { message: "password should be longer than 8 letters" }),
      })
      .refine((data) => data.password === data.passwordConfirm, {
        path: ["passwordConfirm"],
        message: "password is not correct",
      });
    const passwordObj = { password: value, passwordConfirm: confirmValue };
    const result = PASSWORD_SCHEMA.safeParse(passwordObj);

    if (!result.success) return alert("Please enter correct password");
    editUser(passwordObj);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
    editUser({ theme: event.target.value });
  };

  return (
    <div className="w-10/12 sm:w-2/3 md:w-1/2 mx-auto">
      <h2 className="font-jp font-thin text-xl md:text-2xl text-blue-dark mb-4 text-center w-full">
        セッティング
      </h2>
      <div className="w-full">
        <div>
          <div className="w-full border-b border-b-slate-400 pb-8">
            <Box sx={{ resize: "horizontal", overflow: "hidden", px: 2 }}>
              <Label className="font-semibold uppercase text-sm mb-2 block">Theme Color</Label>

              <RadioGroup
                aria-labelledby="theme color"
                defaultValue="warning"
                sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
                onChange={handleChange}
              >
                {(["primary", "neutral", "danger", "success", "warning"] as const).map((color) => (
                  <Sheet
                    key={color}
                    sx={{
                      position: "relative",
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      bgcolor: `${color}.solidActiveBg`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Radio
                      overlay
                      variant="solid"
                      color={color}
                      checkedIcon={<Done />}
                      value={color}
                      slotProps={{
                        input: { "aria-label": color },
                        radio: {
                          sx: {
                            display: "contents",
                            "--variant-borderWidth": "2px",
                          },
                        },
                      }}
                      sx={{
                        "--joy-focus-outlineOffset": "4px",
                        "--joy-palette-focusVisible": (theme) => theme.vars.palette[color][500],
                        [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                          outlineWidth: "2px",
                        },
                      }}
                    />
                  </Sheet>
                ))}
              </RadioGroup>
            </Box>
          </div>
          <div className="grid gap-6  pt-8">
            <div className="px-4">
              <InputUser
                storedValue={userData.email}
                label="EMAIL"
                objKey="email"
                centerText={false}
              />
            </div>
            <div className="px-4">
              <InputUser
                storedValue={userData.name}
                label="NAME"
                objKey="name"
                centerText={false}
              />
            </div>
            <div className=" flex items-center gap-2 flex-col px-4">
              <div className="w-full flex items-center text-start gap-6 ">
                <Label className="font-semibold uppercase text-sm">PASSWORD</Label>
                <button onClick={() => setIsEditing((prev) => !prev)}>
                  <ModeEditOutlineIcon
                    sx={{
                      width: "16px",
                      color: "#888",
                      transition: "all .3s ease",
                      "&:hover": { color: "#555" },
                    }}
                  />
                </button>
              </div>
              {isEditing && (
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex flex-col  sm:flex-row  gap-4 relative">
                    <Input onChange={(e) => setValue(e.target.value)} placeholder="password" />

                    <Input
                      onChange={(e) => setConfirmValue(e.target.value)}
                      placeholder="password confirm"
                    />
                  </div>
                  <Button
                    className="button text-xs mt-2 w-[160px] mx-auto"
                    onClick={() => {
                      handleUpdatePassword();
                      setIsEditing((prev) => !prev);
                    }}
                  >
                    Change password
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * theme change
 *
 * lang option (ja/sv/de/en)
 *
 * password/name/email
 *
 *
 * delete account
 */
