import { DeckType } from "../../../types/flashcardTypes";

export const DeckStartCard = ({ deck }: { deck: DeckType }) => {
  return (
    <div className="">
      <h3 className="text-3xl font-semibold text-center">{deck.title}</h3>
      <div className="py-4 px-3 text-xs border border-stone-300 rounded-lg mt-8">
        <p>Finished: {deck.isDone ? "Finished" : "Not Yet"}</p>
        <p>Created: {deck.createdAt?.split("T")[0]}</p>
        <p>Last reviewed: {deck.last_reviewed_date?.split("T")[0]}</p>
      </div>
    </div>
  );
};
