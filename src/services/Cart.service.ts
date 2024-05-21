import http from "../Api/http";

export const getCartStatus = async () => {
  const response = await http.get<typeCart[]>('/card');
  return response.data
}

export const addToCart = async (item_id: number) => {
  const response = await http.post<typeCart[]>(`/card/add/${item_id}`);
  return response.data
}

export const deleteItem = async (item_id: number) => {
  const response = await http.delete<typeCart[]>(`/card/delete/${item_id}`);
  return response.data
}

export const deleteAllItem = async () => {
  const response = await http.delete<typeCart[]>(`/card`);
  return response.data
}