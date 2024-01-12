import { useState } from "react";
import { useCreateFlashcard } from "../../hooks/flashcard/useCreateFlashcard";
import { Label } from "../../../../ui/shadcn/Label";
import { ButtonSubmit } from "../../../../ui/buttons/ButtonSubmit";
import { Textarea } from "../../../../ui/shadcn/Textarea";

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
    <div className="flex flex-col px-2 mx-auto">
      <Label htmlFor="question" className="text-xs sm:text-sm font-semibold">
        Question
      </Label>
      <Textarea
        id="question"
        value={questionValue}
        onChange={(e) => setQuestionValue(e.target.value)}
        className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
      />
      <Label htmlFor="answer" className="text-xs sm:text-sm font-semibold">
        Answer
      </Label>
      <Textarea
        value={answerValue}
        onChange={(e) => setAnswerValue(e.target.value)}
        className="border border-slate-500 rounded w-[300px] py-2 px-3 mb-6 mt-2"
      />
      <ButtonSubmit isLoading={isCreating} onClick={handleEdit} text="Add" />
    </div>
  );
};
