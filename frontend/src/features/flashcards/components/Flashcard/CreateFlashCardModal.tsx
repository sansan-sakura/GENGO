import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useCreateFlashcard } from "../../hooks/flashcard/useCreateFlashcard";

export const CreateFlashCardModal = ({ id }: { id: string | undefined }) => {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const { isCreating, createFlashcard } = useCreateFlashcard();

  const handleEdit = () => {
    if (id === undefined) return;
    if (questionValue === "" || answerValue == "") return alert("Please fill answer and question");
    const newData = { question: questionValue, answer: answerValue, deck: id };
    createFlashcard(newData);
    setAnswerValue("");
    setQuestionValue("");
  };

  return (
    <div>
      <div className="flex flex-col">
        <Toaster />
        <h2 className="text-xl text-center font-semibold">New Flashcard</h2>
        <label htmlFor="question" className="text-lg font-semibold">
          Question
        </label>
        <textarea
          id="question"
          cols={20}
          rows={3}
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
          className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
        />
        <label htmlFor="answer" className="text-lg font-semibold">
          Answer
        </label>
        <textarea
          cols={20}
          rows={3}
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
          className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
        />
        <button
          disabled={isCreating}
          className="button bg-red-light font-semibold"
          onClick={handleEdit}
        >
          add
        </button>
      </div>
    </div>
  );
};
