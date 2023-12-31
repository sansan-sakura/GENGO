import { useState, useEffect } from "react";
import { Label } from "../Flashcard/Label";
import { EditBtn } from "../../../../ui/EditBtn";
import { Modal } from "../../../../ui/Modal";
import { EditFlashCardModal } from "../Flashcard/EditFlashCardModal";
import { DeleteBtn } from "../../../../ui/DeleteBtn";
import { useDeleteFlashcard } from "../../hooks/flashcard/useDeleteFlashcard";
import { Toaster } from "react-hot-toast";
import { CardType } from "../../../../types/flashcardTypes";
import { Spinner } from "../../../../ui/Spinner";
import { labels, labelsColors } from "../../../../statics/colors";

export const DeckCard = ({ cards }: { cards: Array<CardType> }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<CardType>();
  const [isFinished, setIsFinished] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteFlashcard } = useDeleteFlashcard();

  useEffect(() => {
    if (cards.length === 0 || cards === undefined) return;
    setCurrentCard(cards[currentIndex]);
  }, [cards, setCurrentCard, currentIndex]);

  if (currentCard === undefined) return <Spinner />;

  const { answer, question, status, _id } = currentCard;

  const handleClick = () => {
    if (cards.length === currentIndex + 1) setIsFinished(true);
    if (cards.length > currentIndex + 1) setCurrentIndex((prev) => prev + 1);
    setIsChecked(false);
  };

  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure to delete this flashcard?");
    if (!confirmDelete) return null;
    deleteFlashcard(_id);
  };

  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setIsFinished(false);
  };

  if (isFinished)
    return (
      <div className="flex flex-col items-center grow justify-center text-center">
        <p className="text-blue-default font-semibold text-lg sm:text-2xl">
          This deck has no more cards to review
        </p>
        <p className="text-green-dark font-semibold text-base sm:text-lg mt-2">
          Do you want to review again?
        </p>
        <button
          onClick={handlePlayAgain}
          className="button mt-4 px-6 sm:px-8 bg-red-default text-white font-bold"
        >
          Again
        </button>
      </div>
    );

  return (
    <>
      <Toaster />
      <div className="w-full grow border border-green-dark py-6 px-2 sm:py-24 sm:px-6 flex flex-col justify-between items-center gap-10 sm:gap-16 mt-1 rounded">
        {!isChecked ? (
          <>
            <h3 className="text-lg sm:text-2xl mt-6 sm:mt-0">{question}</h3>
          </>
        ) : (
          <div className="flex flex-col justify-between w-full grow">
            <h3 className="text-;\lg sm:text-2xl text-center mt-10">{answer}</h3>
            <p className="text-end mr-4">last status: {status}</p>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-2 mt-4 sm:mt-8 mb-2 justify-between px-1 sm:px-4">
        <div className="flex gap-4">
          <div className="bg-red-default text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition ease duration-100 hover:brightness-95">
            <EditBtn handleEdit={() => setIsModalOpen(true)} color="#fff" size="28px" />
          </div>
          <div className="bg-blue-default text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition ease duration-100 hover:brightness-95">
            <DeleteBtn handleDelete={handleDelete} color="#fff" size="28px" />
          </div>
        </div>
        {isChecked ? (
          <div className="flex flex-wrap gap-1 justify-end w-40 sm:w-full sm:gap-4">
            {labels.map((label, i) => (
              <Label
                key={label}
                label={label}
                bg={labelsColors[i]}
                id={_id}
                onNextQuestion={handleClick}
              />
            ))}
          </div>
        ) : (
          <button
            onClick={() => setIsChecked(true)}
            className="button ml-auto  py-0.5 sm:py-1 px-4 sm:px-6 bg-blue-default font-semibold text-white text-base sm:text-lg"
          >
            Check
          </button>
        )}
      </div>
      {isModalOpen && (
        <Modal
          content={<EditFlashCardModal answer={answer} question={question} id={_id} />}
          setIsOpenModal={setIsModalOpen}
        />
      )}
    </>
  );
};
