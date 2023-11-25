import { getFlashCard } from "../../../../services/apiFlashcard";
import { useQuery } from "@tanstack/react-query";
export function useFlashcard(id: number | string) {
  const {
    isLoading,
    data: flashcard,
    error,
  } = useQuery({
    queryKey: ["flashcard"],
    queryFn: () => getFlashCard(id),
  });
  return { isLoading, flashcard, error };
}
