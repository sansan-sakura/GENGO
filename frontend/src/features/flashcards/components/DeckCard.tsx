import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { currentFlashCardsState } from "../../../states/atoms/flashcardAtoms";
import { Label } from "./Label";
import { EditBtn } from "../../../ui/EditBtn";
import { Modal } from "../../../ui/Modal";
import { EditFlashCardModal } from "./EditFlashCardModal";
import { DeleteBtn } from "../../../ui/DeleteBtn";
import { useDeleteFlashcard } from "../hooks/flashcard/useDeleteFlashcard";
import { Toaster } from "react-hot-toast";
import { CardType } from "../../../types/flashcardTypes";
const labels = ["very hard", "hard", "okay", "easy"];
const labelsColors = ["bg-red-dark", "bg-blue-dark", "bg-green-dark", "bg-yellow-default"];

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

  if (currentCard === undefined) return <p>Loading</p>;
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
      <div className="flex flex-col items-center grow justify-center">
        <p className="text-blue-default font-semibold text-2xl">
          This deck has no more cards to review
        </p>
        <p className="text-green-dark font-semibold text-lg mt-2">Do you want to review again?</p>
        <button
          onClick={handlePlayAgain}
          className="button mt-4 px-8 bg-red-default text-white font-bold"
        >
          Again
        </button>
      </div>
    );

  return (
    <>
      <Toaster />
      <div className="w-full grow border border-green-dark py-6 px-2 flex flex-col justify-between items-center gap-16 mt-1 rounded">
        {!isChecked ? (
          <>
            <h3 className="text-2xl mt-10">{question}</h3>
          </>
        ) : (
          <div className="flex flex-col justify-between w-full grow">
            <h3 className="text-2xl text-center mt-10">{answer}</h3>
            <p className="text-end mr-4">last status: {status}</p>
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-8 mb-2 justify-between px-4">
        <div className="flex gap-4">
          <div className="bg-red-default text-white w-11 h-11 rounded-full flex items-center justify-center transition ease duration-100 hover:brightness-95">
            <EditBtn handleEdit={() => setIsModalOpen(true)} color="#fff" size="28px" />
          </div>
          <div className="bg-blue-default text-white w-11 h-11 rounded-full flex items-center justify-center transition ease duration-100 hover:brightness-95">
            <DeleteBtn handleDelete={handleDelete} color="#fff" size="28px" />
          </div>
        </div>
        {isChecked ? (
          <div className="flex flex-col items-center justify-center w-fit gap-4">
            <div className="flex gap-4">
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
          </div>
        ) : (
          <button
            onClick={() => setIsChecked(true)}
            className="button ml-auto  py-1 px-6 bg-blue-default font-semibold text-white text-lg"
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
