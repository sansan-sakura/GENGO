import { Link } from "react-router-dom";

export const ButtonOutline = ({
  name,
  bg,
  path = "#",
  type = "link",
}: {
  name: string;
  bg: string;
  path?: string;
  type?: string;
}) => {
  const styleLink = "group relative block h-1 w-26 sm:h-14 sm:w-[180px] mx-auto shadow-lg mb-8";

  if (type === "a") {
    return (
      <a href={path} className={styleLink}>
        <ButtonInnerEl name={name} bg={bg} />
      </a>
    );
  }

  return (
    <Link to={path} className={styleLink}>
      <ButtonInnerEl name={name} bg={bg} />
    </Link>
  );
};

function ButtonInnerEl({ name, bg }: { name: string; bg: string }) {
  return (
    <>
      <span
        className={`absolute inset-0 border-2 border-dashed border-black rounded-md hidden sm:inline ${bg}`}
      ></span>

      <div className="relative sm:h-full flex justify-center items-center  rounded-md transform border-2 border-black bg-white transition-transform group-hover:-translate-y-1 sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2">
        <div className="p-1.5 transition-opacity sm:group-hover:absolute lg:p-2 ">
          <p className="text-sm sm:text-lg lg:text-[22px] font-medium text-center">{name}</p>
        </div>
      </div>
    </>
  );
}
