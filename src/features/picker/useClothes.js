import { useQuery } from "@tanstack/react-query";
import { getClothes } from "../../services/apiClothes";

export function useClothes() {
  const {
    data: clothes,
    error,
    isLoading,
  } = useQuery({ queryKey: ["clothes"], queryFn: getClothes });

  return { clothes, error, isLoading };
}
