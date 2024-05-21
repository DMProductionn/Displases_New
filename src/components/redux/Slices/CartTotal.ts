import { createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState = {
  total: 0
}

export const CartTotal = createSlice({
  name: 'CartTotal',
  initialState,
  reducers: {
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    }
  },
})


export const { setTotal } = CartTotal.actions;


export default CartTotal.reducer