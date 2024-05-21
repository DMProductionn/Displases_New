import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteAllItem } from "../services/Cart.service";

const useDeleteAllCart = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['deleteAllCart'],
    mutationFn: deleteAllItem,
    onSuccess: () =>  {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    }
  });
  return { mutate }
}

export default useDeleteAllCart