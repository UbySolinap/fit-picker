import { useMutation } from "@tanstack/react-query";
import { updateItem as updateItemApi } from "../../services/apiClothes";
import toast from "react-hot-toast";

export function useUpdateItem() {
  const { mutate: updateItem } = useMutation({
    mutationFn: ({ itemId, newTimesWorn }) =>
      updateItemApi(itemId, newTimesWorn),
    onError: (err) => toast.error(err.message),
  });

  return { updateItem };
}
