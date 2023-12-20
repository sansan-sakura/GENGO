import { Link, useNavigate } from "react-router-dom";
import { Hanko } from "../Hanko";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../../states/atoms/userAtoms";

export const Footer = () => {
  const setUser = useSetRecoilState(currentUserState);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("accessToken");
    setUser({ name: "", login: false });
    navigate("/");
  };
  return (
    <footer className="bg-gray-50 px-8 py-4">
      <div className="flex gap-6 text-sm mb-14">
        <Link to="/about">
          <p className="transition border-b-4 border-b-gray-50 duration-200 hover:border-b-red-light text-sm sm:text-lg">
            About
          </p>
        </Link>
        <Link to="/contact">
          <p className="transition border-b-gray-50 duration-200 border-b-4 hover:border-b-yellow-light text-sm sm:text-lg">
            Contect
          </p>
        </Link>
        <button
          onClick={handleLogOut}
          className="transition border-b-gray-50 duration-200 border-b-4 hover:border-b-sky-default block text-sm sm:text-lg"
        >
          Log out
        </button>
      </div>
      <div className="flex  items-end justify-end gap-5">
        <small className="text-xs sm:text-sm text-start sm:text-center">
          GENGO was created and is maintained by Sakura Tanaka
        </small>

        <Hanko size="sm" src="/sakura.webp" />
      </div>
    </footer>
  );
};
