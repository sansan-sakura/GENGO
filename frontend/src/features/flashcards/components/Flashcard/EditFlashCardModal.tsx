import { useState } from "react";
import { useEditFlashcard } from "../../hooks/flashcard/useEditFlashcard";
import { Toaster } from "react-hot-toast";

type Props = {
  question: string;
  answer: string;
  id: string | undefined;
};
export const EditFlashCardModal = ({ question, answer, id }: Props) => {
  const [questionValue, setQuestionValue] = useState(question);
  const [answerValue, setAnswerValue] = useState(answer);
  const { isEditing, editFlashcard } = useEditFlashcard();
  const handleEdit = () => {
    if (id === undefined) return;
    if (questionValue === "" || answerValue == "") return alert("Please fill answer and question");
    const newData = { question: questionValue, answer: answerValue };
    editFlashcard({ id, newData });
  };
  return (
    <div className="flex flex-col">
      <Toaster />
      <h2 className="text-xl text-center font-semibold">Edit Flashcard</h2>
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
        disabled={isEditing}
        className="button bg-red-light font-semibold"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};
