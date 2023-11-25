import data from "../../../data/cardData.json";
import { Card } from "../../../ui/Card";
export const Flashcards = () => {
  return (
    <div className="grid grid-cols-2 gap-8 justify-items-center">
      {data.data.map((card, i) => (
        <Card card={card} key={i} bg="bg-blue-default" />
      ))}
    </div>
  );
};
