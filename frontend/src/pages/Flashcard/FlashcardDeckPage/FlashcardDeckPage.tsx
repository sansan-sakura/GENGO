import { Card } from "../../../ui/Card";
import { ContentFrame } from "../../../ui/ContentFrame";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";

const labels = ["really hard", "hard", "okay", "easy"];
export const FlashcardDeckPage = () => {
  return (
    <section className="section-layout">
      <ContentFrame>
        <div>
          <button>
            <CiEdit />
          </button>
          <button>
            <RiDeleteBin3Line />
          </button>
        </div>
        <Card />
        <div className="flex gap-5 pt-8">
          {labels.map((label) => (
            <Label key={label} label={label} />
          ))}
        </div>
      </ContentFrame>
    </section>
  );
};

function Label({ label }: { label: string }) {
  return (
    <button className="bg-red-dark text-white p-2">
      <p>{label}</p>
    </button>
  );
}
