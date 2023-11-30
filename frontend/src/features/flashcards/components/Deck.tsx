import { ContentFrame } from "../../../ui/ContentFrame";
import { useState } from "react";
import { DeckCard } from "./DeckCard";
import { EditBtn } from "../../../ui/EditBtn";
import { useParams } from "react-router-dom";
import { useDeck } from "../hooks/deck/useDeck";
import { Error } from "../../../ui/Error";
import { DeckStartCard } from "./DeckStartCard";

export const Deck = () => {
  const [isStarted, setIsStarted] = useState(false);

  const { id } = useParams();
  const { isLoading, deck, error } = useDeck(id);
  if (isLoading) return <p>loading</p>;
  if (error) return <Error />;
  const currentDeck = deck.data.deck;
  console.log(currentDeck);
  return (
    <>
      <ContentFrame>
        <div className="flex justify-around w-full mb-2">
          <p className="bg-green-light py-1 px-2 rounded">{currentDeck.category.category}</p>
          <EditBtn handleEdit={() => console.log("edit")} />
        </div>

        {!isStarted ? (
          <div className="p-6 flex flex-col gap-4">
            <DeckStartCard deck={currentDeck} />
            <button onClick={() => setIsStarted(true)} className="button mx-auto">
              Start
            </button>
          </div>
        ) : (
          <DeckCard content={deck.data.deck.title} />
        )}
      </ContentFrame>
    </>
  );
};
