import { useState } from "react";
const labels = ["really hard", "hard", "okay", "easy"];
const labelsColors = ["bg-red-dark", "bg-blue-dark", "bg-green-dark", "bg-yellow-default"];
export const DeckCard = ({
  content,
  isDone = false,
  status = "hard",
}: {
  content: string;
  isDone?: boolean;
  status?: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="w-full border border-green-dark px-2 pt-16 flex flex-col justify-between items-center gap-16 mt-1 rounded">
        <p className="text-2xl">{content}</p>
        <div className="w-full flex justify-around pb-8 text-sm">
          <p>{isDone ? "Done" : "Not yet"}</p>
          <p>last status: {status}</p>
        </div>
      </div>
      <div className="flex gap-5 mt-8 mb-2 min-w-[300px]">
        {isChecked ? (
          labels.map((label, i) => <Label key={label} label={label} bg={labelsColors[i]} />)
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
