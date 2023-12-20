import { updateFlashCard } from "../../../../services/apiFlashcard";

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
    <button
      value={label}
      onClick={handleClick}
      className={`${bg} text-white px-2 py-1.5 sm:px-3 rounded hover:brightness-90 transition-all hover:translate-y-1 text-xs sm:text-lg`}
    >
      {label}
    </button>
  );
};
