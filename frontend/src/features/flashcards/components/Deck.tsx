import { ContentFrame } from "../../../ui/ContentFrame";

import data from "../../../data/cardData.json";
import { DeckCard } from "./DeckCard";
import { EditBtn } from "../../../ui/EditBtn";

const labels = ["really hard", "hard", "okay", "easy"];
const labelsColors = ["bg-red-dark", "bg-blue-dark", "bg-green-dark", "bg-yellow-default"];

export const Deck = () => {
  return (
    <ContentFrame>
      <EditBtn handleEdit={() => console.log("edit")} />
      <DeckCard content={data.data[0].cards[0].question} />

      <div className="flex gap-5 mt-8 mb-2">
        {labels.map((label, i) => (
          <Label key={label} label={label} bg={labelsColors[i]} />
        ))}
      </div>
    </ContentFrame>
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
