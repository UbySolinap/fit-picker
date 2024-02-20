import { useQuery } from "@tanstack/react-query";
import { getClothesTypeByOrder } from "../../services/apiClothes";

export function useClothesStats(type) {
  const {
    data: clothes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["statistics", type],
    queryFn: () => getClothesTypeByOrder(type),
  });

  return { clothes, error, isLoading };
}
