import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteDeck as deleteDeckApi } from "../../../../services/apiDeck";

export function useDeleteFlashcard() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteDeck } = useMutation({
    mutationFn: deleteDeckApi,
    onSuccess: () => {
      toast.success("deck successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["deck"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteDeck };
}
