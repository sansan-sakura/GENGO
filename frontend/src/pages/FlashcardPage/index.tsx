import { FlashcardsBoard } from "../../features/flashcards";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  allDecksPerPageState,
  currentFlashCardPageNumState,
  flashcardsNumsPerPage,
} from "../../states/atoms/flashcardAtoms";
import { useDecks } from "../../features/flashcards/hooks/deck/useDecks";
import { useMemo } from "react";

export const FlashcardPage = () => {
  const setCards = useSetRecoilState(allDecksPerPageState);
  const currentPage = useRecoilValue(currentFlashCardPageNumState);
  const cardsNumPerPage = useRecoilValue(flashcardsNumsPerPage);
  const query = useMemo(
    () => `?page=${currentPage}&limit=${cardsNumPerPage}`,
    [currentPage, cardsNumPerPage]
  );
  const { isPending, decksWithQuery, error } = useDecks(query);
  if (isPending) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  setCards(decksWithQuery.data.deck);
  return (
    <section className="section-layout">
      <FlashcardsBoard />
    </section>
  );
};
