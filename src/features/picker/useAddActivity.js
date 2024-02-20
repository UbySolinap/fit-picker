import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity as addActivityApi } from "../../services/apiActivities";
import { useDispatch } from "react-redux";
import { clearList } from "./pickerSlice";
import toast from "react-hot-toast";

export function useAddActivity() {
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { mutate: addActivity, isPending: isAdding } = useMutation({
    mutationFn: (newActivity) => addActivityApi(newActivity),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
      dispatch(clearList());
    },
    onError: (err) => toast.error(err.message),
  });

  return { addActivity, isAdding };
}
