import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateDeck } from "../../../../services/apiDeck";
import { DeckType } from "../../../../types/flashcardTypes";

export function useEditDeck() {
  const queryClient = useQueryClient();
  const { mutate: editDeck, isPending: isEditing } = useMutation({
    mutationFn: ({ id, newData }: { id: number | string; newData: DeckType }) =>
      updateDeck(id, newData),
    onSuccess: () => {
      toast.success("Deck successfully edited ");
      queryClient.invalidateQueries({ queryKey: ["deck"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editDeck };
}
