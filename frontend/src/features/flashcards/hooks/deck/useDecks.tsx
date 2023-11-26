import { getDecksWithQuery } from "../../../../services/apiDeck";
import { useQuery } from "@tanstack/react-query";
export function useDecks(query: string) {
  const {
    isPending,
    data: decksWithQuery,
    error,
  } = useQuery({
    queryKey: ["decks", query],
    queryFn: () => getDecksWithQuery(query),
  });
  return { isPending, decksWithQuery, error };
}
