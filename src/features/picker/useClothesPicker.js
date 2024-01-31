import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity as addActivityApi } from "../../services/apiActivities";
import { useDispatch } from "react-redux";
import { clearList } from "./pickerSlice";
import toast from "react-hot-toast";

export function useClothesPicker() {
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { mutate: addActivity, isPending: isAdding } = useMutation({
    mutationFn: (newActivity) => addActivityApi(newActivity),
    onSuccess: () => {
      toast.success("🧥 Fit picked! show your style to the world.");
      queryClient.invalidateQueries({
        queryKey: ["clothes"],
      });
      dispatch(clearList());
    },
    onError: (err) => toast.error(err.message),
  });

  return { addActivity, isAdding };
}
