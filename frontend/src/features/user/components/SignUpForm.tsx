import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  LinearProgress,
  Typography,
} from "@mui/joy";

import { checkFormIsValid, selectErrorMessage } from "../actions/apiActions";
import { FormEvent, useState } from "react";
import { createUser } from "../../../services/apiUser";
import { FormError } from "../../../types/userType";
import { useNavigate } from "react-router-dom";
import { Key } from "@mui/icons-material";
import { currentUserState } from "../../../states/atoms/userAtoms";
import { useSetRecoilState } from "recoil";

const initialState = {
  name: { error: false, message: "" },
  email: { error: false, message: "" },
  password: { error: false, message: "" },
  passwordConfirm: { error: false, message: "" },
};

const initialDBerror = {
  status: false,
  message: "",
};

const minLength = 8;

export const SignUpForm = () => {
  const [formError, setFormError] = useState<FormError>(initialState);
  const [dbError, setDbError] = useState(initialDBerror);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const setCurrentUser = useSetRecoilState(currentUserState);

  const hanldleSubmit = async (e: FormEvent<HTMLFormElement> | undefined) => {
    const result = checkFormIsValid(e);
    setDbError(initialDBerror);
    setFormError(initialState);
    let userObj;
    if (!result.success) {
      const selectedMessage = selectErrorMessage(result);
      return setFormError(selectedMessage);
    } else {
      const data = result;
      userObj = {
        name: data.data.name,
        email: data.data.email,
        password: data.data.passwords.password,
        passwordConfirm: data.data.passwords.passwordConfirm,
      };
      let res;
      if (userObj) res = await createUser(userObj);
      if (!res.status) {
        setDbError({ status: true, message: res.message });
      } else if (userObj) {
        setCurrentUser({ name: userObj.name, accessToken: res.accessToken, login: true });
        navigate("/dashboard");
      }
    }
  };
  return (
    <div>
      <div className="w-[300px] sm:w-[500px] mx-auto pt-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-900 text-center mb-4">Sign Up</h2>
        <form className="w-full" onSubmit={hanldleSubmit}>
          <FormControl id="name" className="mb-4" error={formError.name.error}>
            <FormLabel required={true}>Name</FormLabel>
            <Input name="name" placeholder="Harry Potter" className="p-2  " />
            <FormHelperText>{formError.name.error && formError.name.message}</FormHelperText>
          </FormControl>
          <FormControl id="email" className="mb-4" error={formError.email.error}>
            <FormLabel required={true}>Email</FormLabel>
            <Input name="email" placeholder="harry@hogwarts.ed" className="p-2 " />
            <FormHelperText>{formError.email.error && formError.email.message}</FormHelperText>
          </FormControl>
          <FormControl id="password" className="mb-4" error={formError.password.error}>
            <FormLabel required={true}>Password : (at least 8 letters)</FormLabel>
            <Input
              name="password"
              type="password"
              startDecorator={<Key />}
              placeholder="password..."
              className="p-2 "
              onChange={(event) => setValue(event.target.value)}
            />
            <FormHelperText>
              {formError.password.error && formError.password.message}
            </FormHelperText>
            <LinearProgress
              determinate
              size="sm"
              value={Math.min((value.length * 100) / minLength, 100)}
              sx={{
                bgcolor: "orange",
                color: "#4d7c0f",
                marginTop: "10px",
              }}
            />
            <Typography level="body-xs" sx={{ alignSelf: "flex-end", color: "darkGreen" }}>
              {value.length < 3 && "Very weak"}
              {value.length >= 3 && value.length < 6 && "Weak"}
              {value.length >= 6 && value.length < 10 && "Strong"}
              {value.length >= 10 && "Very strong"}
            </Typography>
          </FormControl>
          <FormControl
            id="passwordConfirm"
            className="mb-4"
            error={formError.passwordConfirm.error}
          >
            <FormLabel required={true}>Confirm Password</FormLabel>
            <Input
              name="passwordConfirm"
              placeholder="password..."
              className="p-2 "
              type="password"
              startDecorator={<Key />}
            />
            <FormHelperText>
              {formError.passwordConfirm.error && formError.passwordConfirm.message}
            </FormHelperText>
          </FormControl>
          <div className="flex items-center justify-center">
            <button className="button">Register</button>
          </div>
          {dbError && <p className="text-red-700 text-base">{dbError.message}</p>}
        </form>
      </div>
    </div>
  );
};
