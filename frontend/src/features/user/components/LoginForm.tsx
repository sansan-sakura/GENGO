import { Link } from "react-router-dom";
import { loginUser } from "../../../services/apiUser";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input } from "@mui/joy";
import { currentUserState } from "../../../states/atoms/userAtoms";
import { useSetRecoilState } from "recoil";

export const LoginForm = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const handleLogin = async (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    setError(false);
    const formData = new FormData(event?.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());

    const loginData = {
      email: formJson.email,
      password: formJson.password,
    };
    console.log(loginData);
    const logined = await loginUser(loginData);
    console.log(logined);

    if (logined.notFound) {
      setError(true);
      alert("User doesn't exist");
    } else {
      alert("You are logged in!!");
      setCurrentUser({ name: logined.name, accessToken: logined.accessToken, login: true });
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-[300px] sm:w-[400px]">
      <h2 className="text-3xl text-center font-bold text-lime-900">Log In</h2>
      <form className="w-full" onSubmit={handleLogin}>
        <FormControl id="email">
          <FormLabel required={true}>Email</FormLabel>
          <Input name="email" placeholder="example@gmail.com" className="p-2 mb-4" />
        </FormControl>
        <FormControl id="password">
          <FormLabel required={true}>Password</FormLabel>
          <Input name="password" type="password" placeholder="password..." className="p-2 mb-4" />
        </FormControl>
        <div className="flex flex-col items-center justify-center">
          <button className="button">Login</button>
          <p className="text-center mt-4 text-sm">
            You don't have your account yet?
            <br />
            <Link
              to="/signup"
              className="transition duration-150 ease-in-out text-green-900 underline block hover:translate-y-1 "
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
