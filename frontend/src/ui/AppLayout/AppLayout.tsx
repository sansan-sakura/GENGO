import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Aside } from "../Aside/Aside";
import { BreadCrumble } from "../BreadCrumble";
import { Footer } from "../Footer";
import { Header } from "../Header";

import { useDecksDates } from "../../hooks/useDatesDecks";
import { allCardDatesState } from "../../states/atoms/flashcardAtoms";

export const AppLayout = () => {
  const setAllCardDatesStat = useSetRecoilState(allCardDatesState);

  const { isPending, decksDates, error } = useDecksDates();

  if (isPending) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  setAllCardDatesStat(decksDates.data.deck);
  return (
    <>
      <div className="grid grid-cols-8 gap-0">
        <div className="col-span-2">
          <Aside />
        </div>
        <main className="col-span-6 grid grid-rows-[auto_1fr_auto]">
          <div>
            <Header />
          </div>
          <div className="p-8">
            <div className="max-w-[1200px] flex items-center flex-col justify-center">
              <BreadCrumble />
              <Outlet />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};
