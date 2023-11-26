import { useSetRecoilState } from "recoil";
import { Calendar, Chart, Goals } from "../../features/dashboard";
import { useDecksDates } from "../../hooks/useDatesDecks";
import { allCardDatesState } from "../../states/atoms/flashcardAtoms";

export const Dashboard = () => {
  const setAllCardDatesStat = useSetRecoilState(allCardDatesState);

  const { isPending, decksDates, error } = useDecksDates();

  if (isPending) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  setAllCardDatesStat(decksDates.data.deck);

  return (
    <section className="flex flex-col gap-12 section-layout">
      <Goals />
      <Calendar />
      <Chart />
    </section>
  );
};
