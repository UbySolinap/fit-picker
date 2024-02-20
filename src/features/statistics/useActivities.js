import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../../services/apiActivities";
import { useSearchParams } from "react-router-dom";

export function useActivities() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("activity");
  const filter = !filterValue || filterValue === "All" ? null : filterValue;

  const {
    data: activities,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["activities", filter],
    queryFn: () => getActivities(filter),
  });

  return { activities, error, isLoading };
}
