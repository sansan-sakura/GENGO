import { ContentFrame } from "../../../../ui/ContentFrame";
import { useState } from "react";
import { DeckCard } from "./DeckCard";
import { useParams } from "react-router-dom";
import { useDeck } from "../../hooks/deck/useDeck";
import { Error } from "../../../../ui/Error";
import { AddBtn } from "../../../../ui/AddBtn";
import { Modal } from "../../../../ui/Modal";
import { CreateFlashCardModal } from "../Flashcard/CreateFlashCardModal";
import { Spinner } from "../../../../ui/Spinner";
import { useChooseCategoryColor } from "../../hooks/category/useChooseCategoryColor";

export const Deck = () => {
  const [isStarted, setIsStarted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();
  const { isLoading, deck, error } = useDeck(id);

  const categoryBgColor = useChooseCategoryColor(deck?.data?.deck?.category?.category);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  const currentDeck = deck.data.deck;

  return (
    <>
      <ContentFrame>
        <div className="pt-3 px-4 flex flex-col justify-between w-full min-h-[300px] md:min-w-[700px] md:min-h-[450px] max-w-[600px]">
          {!isStarted ? (
            <>
              <h3 className="text-3xl font-semibold text-center mt-10">{currentDeck.title}</h3>

              <button
                onClick={() => setIsStarted(true)}
                className="button mx-auto py-1 px-6 sm:py-2 sm:px-10 bg-green-dark font-semibold text-white text-lg"
              >
                Start
              </button>
            </>
          ) : deck.data.deck.cards.length !== 0 ? (
            <DeckCard cards={currentDeck.cards} />
          ) : (
            <div className="w-full h-full flex items-center justify-center grow">
              <div className="border-2 border-red-light py-4 px-6 rounded-md text-xl fond-bold ">
                <p>Please add flashcard 📝</p>
              </div>
            </div>
          )}
        </div>
      </ContentFrame>

      {/* Flashcard editing bar */}
      <div className="w-full flex items-center justify-between px-6">
        <div className="grid w-fit my-4 sm:my-10 border justify-items-center items-center border-stone-300 rounded-lg py-1 px-1">
          {currentDeck?.category?.category ? (
            <p
              className={`bg-${
                categoryBgColor?.color ? categoryBgColor.color : "red-light"
              } py-1 px-2 rounded`}
            >
              {currentDeck?.category?.category}
            </p>
          ) : (
            ""
          )}

          <div className="py-4 px-3 text-xs">
            <p>Finished: {currentDeck.isDone ? "Finished" : "Not Yet"}</p>
            <p>Created: {currentDeck.createdAt?.split("T")[0]}</p>
            <p>Last reviewed: {currentDeck.last_reviewed_date?.split("T")[0]}</p>
          </div>
        </div>
        <div className="grid justify-items-center gap-2">
          <div className="bg-yellow-default text-white w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition ease duration-100 hover:brightness-95">
            <AddBtn handleEdit={() => setIsModalOpen(true)} color="#fff" size="28px" />
          </div>
          <span className="text-[8px] sm:text-[10px]">new Flashcard</span>
        </div>
      </div>
      {isModalOpen && (
        <Modal content={<CreateFlashCardModal id={id} />} setIsOpenModal={setIsModalOpen} />
      )}
    </>
  );
};
