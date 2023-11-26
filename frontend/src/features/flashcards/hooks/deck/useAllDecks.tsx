import { getAllDecks } from "../../../../services/apiDeck";
import { useQuery } from "@tanstack/react-query";
export function useAllDecks() {
  const {
    isLoading,
    data: decks,
    error,
  } = useQuery({
    queryKey: ["decks"],
    queryFn: getAllDecks,
  });
  return { isLoading, decks, error };
}
