import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateFlashCard } from "../../../../services/apiFlashcard";
import { CardType } from "../../../../types/flashcardTypes";

export function useEditFlashcard() {
  const queryClient = useQueryClient();
  const { mutate: editFlashcard, isPending: isEditing } = useMutation({
    mutationFn: ({ id, newData }: { id: number | string; newData: CardType }) =>
      updateFlashCard(id, newData),
    onSuccess: () => {
      toast.success("Flashcard successfully edited ");
      queryClient.invalidateQueries({ queryKey: ["flashcard"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editFlashcard };
}
