import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterMenu: false,
  colorBtn: true,
  priceBtn: true,
}

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterMenu: (state) => {
      state.filterMenu = !state.filterMenu
    },
    setColorBtn: (state) => {
      state.colorBtn = !state.colorBtn
    },
    setPriceBtn: (state) => {
      state.priceBtn = !state.priceBtn
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilterMenu, setColorBtn, setPriceBtn } = filter.actions

export default filter.reducer