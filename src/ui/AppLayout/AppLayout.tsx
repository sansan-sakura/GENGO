import { Outlet } from "react-router-dom";
import { Aside } from "../Aside/Aside";
import { BreadCrumble } from "../BreadCrumble";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const AppLayout = () => {
  return (
    <div className="grid grid-cols-8 gap-0">
      <div className="col-span-2">
        <Aside />
      </div>
      <main className="col-span-6 grid grid-rows-[auto_1fr_auto]">
        <div>
          <Header />
        </div>
        <div className="p-4">
          <BreadCrumble />
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
