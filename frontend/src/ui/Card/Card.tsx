import { CategoryLabel } from "../CategoryLabel";
import { CardsType } from "../../types/flashcardTypes";

export const Card = ({ bg = "bg-red-500", card }: { bg: string; card: CardsType }) => {
  return (
    <a href="" className="group relative block h-32 w-56 sm:h-44 sm:w-[360px]">
      <span
        className={`absolute inset-0 border-2 border-dashed border-black ${bg} rounded-lg`}
      ></span>

      <div className="relative h-full transform border-2 border-black bg-white  rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-2 transition-opacity group-hover:absolutesm:p-6 lg:p-4 h-full flex flex-col justify-between">
          <CategoryLabel category={card.category} />
          <h2 className="text-xl font-medium sm:text-2xl">{card.title}</h2>
          <div className="flex justify-between">
            <small>{card?.cards?.length} cards</small>
            <small>created at: {card.createdAt.toString().split("T")[0]}</small>
          </div>
        </div>
      </div>
    </a>
  );
};
