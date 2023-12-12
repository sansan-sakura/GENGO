import { ContentFrame } from "../../../ui/ContentFrame";
import { useState } from "react";
import { DeckCard } from "./DeckCard";
import { EditBtn } from "../../../ui/EditBtn";
import { useParams } from "react-router-dom";
import { useDeck } from "../hooks/deck/useDeck";
import { Error } from "../../../ui/Error";
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
      <ContentFrame>
        <div className="pt-3 px-4 flex flex-col justify-between min-w-[700px] min-h-[450px]">
          {!isStarted ? (
            <>
              <h3 className="text-3xl font-semibold text-center mt-10">{currentDeck.title}</h3>

              <button
                onClick={() => setIsStarted(true)}
                className="button mx-auto py-2 px-10 bg-green-dark font-semibold text-white text-lg"
              >
                Start
              </button>
            </>
          ) : (
            <DeckCard />
          )}
        </div>
      </ContentFrame>
      {/* Flashcard editing bar */}

      <div className="grid grid-cols-[1fr_2fr] w-fit my-10 border justify-items-center items-center border-stone-300 rounded-lg ml-auto py-1 px-1">
        <p className="bg-green-light py-1 px-2 rounded  ">{currentDeck.category.category}</p>
        <div className="py-4 px-3 text-xs">
          <p>Finished: {currentDeck.isDone ? "Finished" : "Not Yet"}</p>
          <p>Created: {currentDeck.createdAt?.split("T")[0]}</p>
          <p>Last reviewed: {currentDeck.last_reviewed_date?.split("T")[0]}</p>
        </div>
      </div>
    </>
  );
};
