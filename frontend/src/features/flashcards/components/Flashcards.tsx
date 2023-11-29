import { useRecoilValue } from "recoil";
import { Card } from "./Card";
import { allDecksPerPageState } from "../../../states/atoms/flashcardAtoms";
export const Flashcards = () => {
  const cardsData = useRecoilValue(allDecksPerPageState);
  return (
    <div className="grid grid-cols-2 gap-8 justify-items-center">
      {cardsData.map((card, i) => (
        <Card card={card} key={i} bg="bg-blue-default" />
      ))}
    </div>
  );
};
