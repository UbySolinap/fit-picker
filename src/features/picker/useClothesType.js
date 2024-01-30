import { useQuery } from "@tanstack/react-query";
import { getClothesType } from "../../services/apiClothes";
import { useSearchParams } from "react-router-dom";

export function useClothesType(type) {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get(type);
  const filter = !filterValue || filterValue === "All" ? null : filterValue;

  const {
    data: clothes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["clothes", type, filter],
    queryFn: () => getClothesType(type, filter),
  });

  return { clothes, error, isLoading };
}
