import { useMutation } from "@tanstack/react-query";
import { updateItemWornCount } from "../../services/apiClothes";
import toast from "react-hot-toast";

export function useUpdateItemWornCount() {
  const { mutate: updateItem } = useMutation({
    mutationFn: ({ itemId, newTimesWorn }) =>
      updateItemWornCount(itemId, newTimesWorn),
    onError: (err) => toast.error(err.message),
  });

  return { updateItem };
}
