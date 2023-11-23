import { ButtonOutline } from "../ButtonOutline";
import { Hanko } from "../Hanko";
import { Logo } from "../Logo";
import { navButton as buttonData } from "../../statics/uiContent";

export const Aside = () => {
  const buttons = buttonData.map((button) => (
    <ButtonOutline name={button.name} bg={button.bgColor} key={button.name} path={button.path} />
  ));
  return (
    <aside className=" min-h-screen h-full w-full border-r-2">
      <div className="py-20 flex flex-col gap-8 items-center">
        <Logo />
        <Hanko />
      </div>

      {buttons}
    </aside>
  );
};
