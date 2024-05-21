import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addToCart } from "../services/Cart.service"

const useAddCart = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['addCart'], 
    mutationFn: (item_id: number) => addToCart(item_id),
    async onSuccess() {
      queryClient.invalidateQueries({queryKey: ['cart']})
    }
  })
}

export default useAddCart