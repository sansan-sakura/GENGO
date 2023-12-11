import { ContentFrame } from "../../../ui/ContentFrame";
import { useState } from "react";
import { DeckCard } from "./DeckCard";
import { EditBtn } from "../../../ui/EditBtn";
import { useParams } from "react-router-dom";
import { useDeck } from "../hooks/deck/useDeck";
import { Error } from "../../../ui/Error";
import { DeckStartCard } from "./DeckStartCard";
import { useSetRecoilState } from "recoil";
import { currentFlashCardsState } from "../../../states/atoms/flashcardAtoms";

export const Deck = () => {
  const [isStarted, setIsStarted] = useState(false);
  const setCards = useSetRecoilState(currentFlashCardsState);

  const { id } = useParams();
  const { isLoading, deck, error } = useDeck(id);
  if (isLoading) return <p>loading</p>;
  if (error) return <Error />;
  const currentDeck = deck.data.deck;
  setCards(currentDeck.cards);

  return (
    <>
      <div className="flex justify-around w-full mb-2">
        <p className="bg-green-light py-1 px-2 rounded">{currentDeck.category.category}</p>
        <EditBtn handleEdit={() => console.log("edit")} />
      </div>
      <ContentFrame>
        {!isStarted ? (
          <div className="p-6 flex flex-col gap-4 min-w-[350px]">
            <DeckStartCard deck={currentDeck} />
            <button
              onClick={() => setIsStarted(true)}
              className="button mx-auto py-2 mt-6 bg-red-default font-semibold text-white"
            >
              Start
            </button>
          </div>
        ) : (
          <DeckCard />
        )}
      </ContentFrame>
    </>
  );
};
