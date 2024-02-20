import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFit as updateFitApi } from "../../services/apiActivities";

import toast from "react-hot-toast";

export function useUpdateFit() {
  const queryClient = useQueryClient();

  const { mutate: updateFit, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, fitImage }) => updateFitApi(id, fitImage),
    onSuccess: () => {
      toast.success("✨ Fit successfully updated.");
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateFit, isUpdating };
}
