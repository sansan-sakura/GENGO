import { Link } from "react-router-dom";

export const ButtonOutline = ({
  name,
  bg,
  path = "#",
  type = "link",
  clickHandler,
}: {
  name: string;
  bg: string;
  path?: string;
  type?: string;
  clickHandler?: () => void;
}) => {
  const styleLink = "group relative block h-1 w-26 sm:h-14 sm:w-[180px] mx-auto shadow-lg mb-8";

  if (type === "a") {
    return (
      <a href={path} className={styleLink}>
        <ButtonInnerEl name={name} bg={bg} />
      </a>
    );
  }

  if (type == "click") {
    <ButtonInnerEl name={name} bg={bg} onClick={clickHandler} />;
  }

  return (
    <Link to={path} className={styleLink}>
      <ButtonInnerEl name={name} bg={bg} />
    </Link>
  );
};

function ButtonInnerEl({ name, bg, onClick }: { name: string; bg: string; onClick?: () => void }) {
  const ButtonEl = onClick ? "button" : "div";
  return (
    <>
      <span
        className={`absolute inset-0 border-2 border-dashed border-black  rounded-md ${bg}`}
      ></span>

      <ButtonEl
        onClick={onClick}
        className="relative h-full flex justify-center items-center  rounded-md transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <div className="p-2 transition-opacity group-hover:absolute  sm:p-2 ">
          <p className=" text-[22px] font-medium text-center">{name}</p>
        </div>
      </ButtonEl>
    </>
  );
}
