import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearActivity as clearActivityApi } from "../../services/apiActivities";
import toast from "react-hot-toast";

export function useClearActivity() {
  const queryClient = useQueryClient();

  const { mutate: clearActivity, isPending: isClearing } = useMutation({
    mutationFn: (id) => clearActivityApi(id),
    onSuccess: () => {
      toast.success("🗓️ Activity history successfully cleared.");
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isClearing, clearActivity };
}
