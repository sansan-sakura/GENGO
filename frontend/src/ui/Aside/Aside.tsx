import { ButtonOutline } from "../ButtonOutline";
import { Hanko } from "../Hanko";
import { Logo } from "../Logo";
import { navButton as buttonData } from "../../statics/uiContent";

export const Aside = () => {
  const buttons = buttonData.map((button) => (
    <ButtonOutline name={button.name} bg={button.bgColor} key={button.name} path={button.path} />
  ));
  return (
    <aside className=" lg:min-h-screen lg:h-full w-full lg:border-r-2 lg:min-w-[240px]">
      <div className="hidden  py-20 lg:flex flex-col gap-8 items-center">
        <Logo />
        <Hanko />
      </div>
      <div className="bg-gray-50  lg:bg-white ">
        <div className="py-4 flex lg:flex-col w-fit gap-3 mx-auto">{buttons}</div>
      </div>
    </aside>
  );
};
