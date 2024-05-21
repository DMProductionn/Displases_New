import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getDetailProducts } from "../services/Product.service"

const useProductsDetail = (product_name: string): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['productsDetail', product_name],
    queryFn: () => getDetailProducts(product_name)
  });
}

export default useProductsDetail