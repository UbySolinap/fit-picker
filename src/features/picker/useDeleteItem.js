import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { clearSubType } from "./pickerSlice";
import { deleteItem as deleteItemApi } from "../../services/apiClothes";
import toast from "react-hot-toast";

export function useDeleteItem(type) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { isPending: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: (id) => deleteItemApi(id),
    onSuccess: () => {
      toast.success("Item successfully deleted.");

      dispatch(clearSubType(type)); // This will clear all the subtypes first before re fetching so that the removed items subtypes will be removed also.

      queryClient.invalidateQueries({
        queryKey: ["clothes", type],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteItem };
}
