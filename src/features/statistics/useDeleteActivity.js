import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity as deleteActivityApi } from "../../services/apiActivities";
import toast from "react-hot-toast";

export function useDeleteActivity() {
  const queryClient = useQueryClient();

  const { mutate: deleteActivity, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteActivityApi(id),
    onSuccess: () => {
      toast.success("Activity successfully deleted.");
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteActivity };
}
