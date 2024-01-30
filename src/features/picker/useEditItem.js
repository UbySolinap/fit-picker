import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateItemSubType } from "../../services/apiClothes";
import toast from "react-hot-toast";

export function useEditItem(type) {
  const queryClient = useQueryClient();

  const { mutate: editItem, isPending: isEditing } = useMutation({
    mutationFn: ({ itemId, newSubtypes }) =>
      updateItemSubType(itemId, newSubtypes),
    onSuccess: () => {
      toast.success("📝 Item successfully updated.");
      queryClient.invalidateQueries({ queryKey: ["clothes", type] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editItem, isEditing };
}
