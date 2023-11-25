export const DeckCard = ({
  content,
  isDone = false,
  status = "hard",
}: {
  content: string;
  isDone?: boolean;
  status?: string;
}) => {
  return (
    <div className="w-full border border-green-dark px-2 pt-16 flex flex-col justify-between items-center gap-16 mt-1 rounded">
      <p className="text-2xl">{content}</p>
      <div className="w-full flex justify-around pb-8 text-sm">
        <p>{isDone ? "Done" : "Not yet"}</p>
        <p>last status: {status}</p>
      </div>
    </div>
  );
};
