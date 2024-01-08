import { Outlet, useNavigate } from "react-router-dom";
import { BreadCrumble } from "../BreadCrumble";
import { Footer } from "../Footer";
import { Header } from "../Header";

import { useSetRecoilState } from "recoil";
import { currentUserState } from "../../states/atoms/userAtoms";
import { useEffect } from "react";

export const AppLayout = () => {
  const navigate = useNavigate();
  const setCurrentUser = useSetRecoilState(currentUserState);
  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (user) setCurrentUser({ name: user, login: true });
    else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen h-fit">
      <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <div className="p-2 pt-4 sm:p-4 md:p-8 mx-auto w-full max-w-[1200px]">
          <div className="max-w-[1200px] flex items-center flex-col justify-center">
            <BreadCrumble />
            <Outlet />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};
