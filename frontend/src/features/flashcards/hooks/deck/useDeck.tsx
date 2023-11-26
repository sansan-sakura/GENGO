import { getDeck } from "../../../../services/apiDeck";
import { useQuery } from "@tanstack/react-query";
export function useDecks(id: number | string) {
  const {
    isLoading,
    data: decks,
    error,
  } = useQuery({
    queryKey: ["decks"],
    queryFn: () => getDeck(id),
  });
  return { isLoading, decks, error };
}
