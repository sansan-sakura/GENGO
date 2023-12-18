import { Outlet } from "react-router-dom";
import { Hanko } from "../Hanko";

export const LoginSignUpLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr] w-screen h-screen">
      <div className="bg-red-light w-full h-full flex pt-32 justify-center">
        <div className=" flex flex-col h-[340px] justify-between items-center">
          <Hanko />
          <h1 className="h-fit -rotate-90 font-display font-bold text-[100px] text-amber-50">
            GENGO
          </h1>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
