import { useQuery } from "@tanstack/react-query";
import { getUserAddresses } from "../services/addressesApi";

export const useUserAddresses = (userId: string) => {
  const {
    data: addresses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userAddresses"],
    queryFn: () => getUserAddresses(userId),
  });

  return { addresses, isLoading, error };
};
