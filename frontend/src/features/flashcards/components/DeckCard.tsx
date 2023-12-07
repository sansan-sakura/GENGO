import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentFlashCardsState } from "../../../states/atoms/flashcardAtoms";
const labels = ["really hard", "hard", "okay", "easy"];
const labelsColors = ["bg-red-dark", "bg-blue-dark", "bg-green-dark", "bg-yellow-default"];
export const DeckCard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const cards = useRecoilValue(currentFlashCardsState);
  const { answer, createdAt, isDone, question, status, updatedAt } = cards[currentIndex];
  console.log(currentIndex);

  const handleClick = () => {
    if (cards.length === currentIndex - 1) setIsFinished(true);
    if (cards.length > currentIndex + 1) setCurrentIndex((prev) => prev + 1);
    setIsChecked(false);
  };
  return (
    <>
      {!isChecked ? (
        <div className="w-full border border-green-dark px-2 pt-16 flex flex-col justify-between items-center gap-16 mt-1 rounded">
          <h3 className="text-2xl">{question}</h3>
          <div className="w-full flex justify-around pb-8 text-sm">
            <p>{isDone ? "Done" : "Not yet"}</p>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl">{answer}</h3>
          <p>last status: {status}</p>
          <p>{createdAt?.split("T")[0]}</p>
          <p>{updatedAt?.split("T")[0]}</p>
        </div>
      )}
      <div className="flex gap-5 mt-8 mb-2 min-w-[300px]">
        {isChecked ? (
          <div>
            {labels.map((label, i) => (
              <Label key={label} label={label} bg={labelsColors[i]} />
            ))}
            <button onClick={handleClick}>Go to Next</button>
          </div>
        ) : (
          <button onClick={() => setIsChecked(true)} className="button mx-auto">
            Check
          </button>
        )}
      </div>
    </>
  );
};

function Label({ label, bg }: { label: string; bg: string }) {
  return (
    <button
      className={`${bg} text-white py-1 px-2 rounded hover:brightness-90 transition-all hover:translate-y-1`}
    >
      <p>{label}</p>
    </button>
  );
}
