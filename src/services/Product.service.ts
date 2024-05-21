import { QueryFunction } from "@tanstack/react-query"
import http from "../Api/http"
import { TypeProductDetail, TypeProductProps } from "../types/TypeProduct"
import { AxiosResponse } from "axios"


 export const getProducts = async () => {
  const response = await http.get<[]>(`/product/all`)
  return response.data
 }

 export const getDetailProducts = async (product_name: string) => {
  const response = await http.get(`/product/${product_name}`);
  return response.data;
};
