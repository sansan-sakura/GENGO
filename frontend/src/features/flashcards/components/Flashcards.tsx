import { Card } from "./Card";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  allDecksPerPageState,
  currentFlashCardPageNumState,
  flashcardsNumsPerPage,
  searchQuery,
  searchQueryCategory,
  searchQueryCreatedAt,
  searchQueryStatus,
} from "../../../states/atoms/flashcardAtoms";
import { useMemo } from "react";
import { Error } from "../../../ui/Error";
import { DeckType } from "../../../types/flashcardTypes";
import { useDecksWithCategory } from "../hooks/deck/useDecksWithCategory";
export const Flashcards = () => {
  const setCards = useSetRecoilState(allDecksPerPageState);
  const currentPage = useRecoilValue(currentFlashCardPageNumState);
  const cardsNumPerPage = useRecoilValue(flashcardsNumsPerPage);

  const queryCategory = useRecoilValue(searchQueryCategory);
  const queryStatus = useRecoilValue(searchQueryStatus);
  const queryCreatedAt = useRecoilValue(searchQueryCreatedAt);
  const setSearchQuery = useSetRecoilState(searchQuery);
  const query = useMemo(
    () =>
      `page=${currentPage}&limit=${cardsNumPerPage}${
        queryStatus !== "" ? "&isDone=" + queryStatus : ""
      }${queryCreatedAt !== "" ? "&sort=" + queryCreatedAt : ""}`,
    [currentPage, cardsNumPerPage, queryStatus, queryCreatedAt]
  );
  useEffect(() => {
    setSearchQuery(query);
  }, [query, setSearchQuery]);
  const { isPending, decksWithQuery, error } = useDecksWithCategory(queryCategory, query);

  if (isPending) return <p>Loading</p>;
  if (error) return <Error />;

  const decksWithQueries: DeckType[] = decksWithQuery.data.deck;
  setCards(decksWithQueries);

  return (
    <div className="grid grid-cols-2 gap-8 justify-items-center">
      {decksWithQueries.length !== 0 ? (
        decksWithQueries?.map((card, i) => <Card card={card} key={i} bg="bg-blue-default" />)
      ) : (
        <p>There is no matched deck</p>
      )}
    </div>
  );
};
