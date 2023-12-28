import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";

export const useUser = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  return { isPending, data, error };
};
