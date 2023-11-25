import { Card } from "../../../ui/Card";
import { ContentFrame } from "../../../ui/ContentFrame";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import data from "../../../data/cardData.json";

const labels = ["really hard", "hard", "okay", "easy"];
const labelsColors = ["bg-red-dark", "bg-blue-dark", "bg-green-dark", "bg-yellow-default"];

export const FlashcardDeckPage = () => {
  console.log(data.data[0].cards[0].question);
  return (
    <section className="section-layout">
      <ContentFrame>
        <div className="w-full text-end text-xl text-gray-500 pr-6 mt-6">
          <button>
            <CiEdit />
          </button>
          <button className="ml-4">
            <RiDeleteBin3Line />
          </button>
        </div>
        <DeckCard content={data.data[0].cards[0].question} />

        <div className="flex gap-5 mt-8 mb-2">
          {labels.map((label, i) => (
            <Label key={label} label={label} bg={labelsColors[i]} />
          ))}
        </div>
      </ContentFrame>
    </section>
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

function DeckCard({
  content,
  isDone = false,
  status = "hard",
}: {
  content: string;
  isDone?: boolean;
  status?: string;
}) {
  return (
    <div className="w-full border border-green-dark px-2 pt-16 flex flex-col justify-between items-center gap-16 mt-1 rounded">
      <p className="text-2xl">{content}</p>
      <div className="w-full flex justify-around pb-8 text-sm">
        <p>{isDone ? "Done" : "Not yet"}</p>
        <p>last status: {status}</p>
      </div>
    </div>
  );
}
