export const ButtonOutline = ({
  name,
  bg,
  path = "#",
}: {
  name: string;
  bg: string;
  path: string;
}) => {
  return (
    <a
      href={path}
      className="group relative block h-1 w-26 sm:h-14 sm:w-[180px] mx-auto shadow-lg mb-8"
    >
      <span
        className={`absolute inset-0 border-2 border-dashed border-black  rounded-md ${bg}`}
      ></span>

      <div className="relative h-full flex justify-center items-center  rounded-md transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-2 transition-opacity group-hover:absolute  sm:p-2 ">
          <p className=" text-[22px] font-medium text-center">{name}</p>
        </div>
      </div>
    </a>
  );
};
