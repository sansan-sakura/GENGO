import { DeckType } from "../../../types/flashcardTypes";

export const DeckStartCard = ({ deck }: { deck: DeckType }) => {
  return (
    <div className="text-center ">
      <h3 className="text-3xl font-semibold">{deck.title}</h3>
      <div className="p-6 text-sm border border-stone-300 rounded-lg mt-8">
        <p>Created at: {deck.createdAt?.split("T")[0]}</p>
        <p>Finished: {deck.isDone ? "Finished" : "Not Yet"}</p>
        <p>Last reviewed date: {deck.last_reviewed_date?.split("T")[0]}</p>
      </div>
    </div>
  );
};
