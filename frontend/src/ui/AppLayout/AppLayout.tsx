import { Outlet, useNavigate } from "react-router-dom";
import { Aside } from "../Aside/Aside";
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
      <div className="lg:grid lg:grid-cols-8 lg:gap-0 min-h-screen h-full max-h-fit min-w-screen">
        <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
          <Aside />
        </div>
        <main className="min-h-screen grid grid-rows-[auto_auto_1fr_auto] lg:col-span-6 lg:grid-rows-[auto_1fr_auto]">
          <div>
            <Header />
          </div>
          <div className="lg:hidden">
            <Aside />
          </div>
          <div className="p-2 sm:p-4 md:p-8">
            <div className="max-w-[1200px] flex items-center flex-col justify-center">
              <BreadCrumble />
              <Outlet />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};
