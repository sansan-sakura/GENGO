import { updateFlashCard } from "../../../../services/apiFlashcard";
import { Button } from "../../../../ui/shadcn/Button";

export const Label = ({
  label,
  bg,
  id,
  onNextQuestion,
}: {
  label: string;
  bg: string;
  id: string | undefined;
  onNextQuestion: () => void;
}) => {
  const handleClick = async (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    await updateFlashCard(id, { status: target.value });
    onNextQuestion();
  };
  return (
    <Button
      value={label}
      onClick={handleClick}
      className={`${bg} text-white hover:brightness-75 hover:${bg} uppercase`}
    >
      {label}
    </Button>
  );
};
