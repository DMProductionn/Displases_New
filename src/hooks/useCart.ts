import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getCartStatus } from "../services/Cart.service"

const useCart = (): UseQueryResult<any, Error> => {
 return useQuery({
    queryKey: ['cart'], 
    queryFn: () => getCartStatus(),
  });
};

export default useCart;

