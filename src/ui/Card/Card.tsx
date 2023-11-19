export const Card = () => {
  return (
    <a href="" className="group relative block h-32 w-56 sm:h-52 sm:w-[360px]">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative h-full transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolutesm:p-6 lg:p-8">
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
        </div>
      </div>
    </a>
  );
};
