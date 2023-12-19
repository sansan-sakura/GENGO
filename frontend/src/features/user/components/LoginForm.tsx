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
    console.log(formData, formJson);

    const loginData = {
      email: formJson.email,
      password: formJson.password,
    };

    const logined = await loginUser(loginData);

    if (logined.notFound || logined.err) {
      setError(true);
      alert("User doesn't exist");
    } else {
      alert("You are logged in!!");
      setCurrentUser({ name: logined.name, login: true });
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-[300px] sm:w-[400px]">
      <h2 className="text-5xl text-center font-semibold text-red-dark font-display mb-6">Log In</h2>
      <form className="w-full  grid gap-4" onSubmit={handleLogin}>
        <FormControl id="email">
          <FormLabel required={true}>Email</FormLabel>
          <Input name="email" placeholder="gengo@gmail.com" className="py-2 px-3 mb-4" />
        </FormControl>
        <FormControl id="password">
          <FormLabel required={true}>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password..."
            className="py-2 px-3 mb-4"
          />
        </FormControl>
        <div className="flex flex-col items-center justify-center mt-2">
          <button className="button py-1.5 px-4 text-base transition-all duration-300 hover:bg-red-light hover:text-white">
            Log in
          </button>
          <p className="text-center mt-4 text-sm mb-2">You don't have your account yet?</p>
          <Link
            to="/register"
            className="transition duration-150 ease-in-out text-red-dark underline block hover:translate-y-1 "
          >
            Sign up
          </Link>

          {error && <p className="mt-4 text-base text-red-500">Log in failed</p>}
        </div>
      </form>
    </div>
  );
};
