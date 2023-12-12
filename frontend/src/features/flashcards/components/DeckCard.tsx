import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentFlashCardsState } from "../../../states/atoms/flashcardAtoms";
import { Label } from "./Label";
import { EditBtn } from "../../../ui/EditBtn";
import { Modal } from "../../../ui/Modal";
import { EditFlashCardModal } from "./EditFlashCardModal";
const labels = ["very hard", "hard", "okay", "easy"];
const labelsColors = ["bg-red-dark", "bg-blue-dark", "bg-green-dark", "bg-yellow-default"];

export const DeckCard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cards = useRecoilValue(currentFlashCardsState);
  const { answer, question, status, _id } = cards[currentIndex];

  const handleClick = () => {
    if (cards.length === currentIndex - 1) setIsFinished(true);
    if (cards.length > currentIndex + 1) setCurrentIndex((prev) => prev + 1);
    setIsChecked(false);
  };
  return (
    <>
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
      <div className="flex gap-5 mt-8 mb-2">
        {isChecked ? (
          <div className="flex flex-col items-center justify-center w-full gap-6">
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

            {/* <button
              onClick={handleClick}
              className="button  py-1.5 px-6 bg-blue-default font-semibold text-white text-lg"
            >
              Go to Next
            </button> */}
          </div>
        ) : (
          <button
            onClick={() => setIsChecked(true)}
            className="button mx-auto  py-1 px-6 bg-blue-default font-semibold text-white text-lg"
          >
            Check
          </button>
        )}
        <div className="bg-red-default text-white w-10 rounded-full flex items-center justify-center transition ease duration-100 hover:brightness-95">
          <EditBtn handleEdit={() => setIsModalOpen(true)} color="#fff" size="30px" />
        </div>
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
