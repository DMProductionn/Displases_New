import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteItem } from "../services/Cart.service"

const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['deleteItem'],
    mutationFn: deleteItem,
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['cart'] })
    }
  });

  return { mutate };
}


export default useDeleteItem