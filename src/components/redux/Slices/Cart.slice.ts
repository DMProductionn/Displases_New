import { createSlice, PayloadAction } from '@reduxjs/toolkit'




const initialState  = {
  cart: [],
  total_quantity: 0,
}

export const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload
    },
    setQuantity(state, action) {
      state.total_quantity = action.payload
    }
  },
})


export const { setCart, setQuantity } = Cart.actions;


export default Cart.reducer