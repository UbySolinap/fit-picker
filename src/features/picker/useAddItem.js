import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToClothes } from "../../services/apiClothes";
import toast from "react-hot-toast";

export function useAddItem(type) {
  const queryClient = useQueryClient();

  const { mutate: addItem, isPending: isAdding } = useMutation({
    mutationFn: (newItem) => addToClothes(newItem),
    onSuccess: () => {
      toast.success(`New Item added to ${type}.`);
      // To re-fetch the data
      queryClient.invalidateQueries({ queryKey: ["clothes", type] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addItem, isAdding };
}
