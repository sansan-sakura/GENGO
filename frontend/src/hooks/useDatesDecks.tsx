import { getDatesOfDecks } from "../services/apiDeck";
import { useQuery } from "@tanstack/react-query";
import { DeckResType } from "../types/flashcardTypes";

export function useDecksDates() {
  const { isPending, data, error } = useQuery({
    queryKey: ["decks"],
    queryFn: getDatesOfDecks,
  });

  const decksDates = data as DeckResType;

  return { isPending, decksDates, error };
}
