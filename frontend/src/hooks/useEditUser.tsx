import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../services/apiUser";

export const useEditUser = () => {
  const queryClient = useQueryClient();
  const { mutate: editUser, isPending: isEditing } = useMutation({
    mutationFn: (newData) => updateUser(newData), //TODO: declare type
    onSuccess: () => {
      toast.success("User successfully edited ");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editUser };
};
