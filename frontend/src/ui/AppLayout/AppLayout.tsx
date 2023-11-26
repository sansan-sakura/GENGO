import { Outlet } from "react-router-dom";
import { Aside } from "../Aside/Aside";
import { BreadCrumble } from "../BreadCrumble";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Modal } from "../Modal";
import createModal from "../Modal";
export const AppLayout = () => {
  return (
    <div className="grid grid-cols-8 gap-0">
      <div className="col-span-2">
        <Aside />
      </div>
      <main className="col-span-6 grid grid-rows-[auto_1fr_auto]">
        <button onClick={() => createModal(<h1>Hi! I'm a modal</h1>)}>Open</button>
        {/* <div>
          <Header />
        </div>
        <div className="p-8">
          <div className="max-w-[1200px] flex items-center flex-col justify-center">
            <BreadCrumble />
            <Outlet />
          </div>
        </div>
        <div>
          <Footer />
        </div> */}
      </main>
    </div>
  );
};
