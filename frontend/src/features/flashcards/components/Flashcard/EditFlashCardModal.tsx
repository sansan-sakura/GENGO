import { useState } from "react";
import { useEditFlashcard } from "../../hooks/flashcard/useEditFlashcard";
import { Toaster } from "react-hot-toast";
import { Label } from "../../../../ui/shadcn/Label";
import { ButtonSubmit } from "../../../../ui/buttons/ButtonSubmit";

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
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-1">
        <Label htmlFor="question" className="text-xs sm:text-sm font-semibold">
          Question
        </Label>
        <textarea
          id="question"
          cols={20}
          rows={3}
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
          className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="answer" className="text-xs sm:text-sm  font-semibold">
          Answer
        </Label>
        <textarea
          cols={20}
          rows={3}
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
          className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
        />
      </div>
      <ButtonSubmit isLoading={isEditing} text="Edit" onClick={handleEdit} />
    </div>
  );
};
