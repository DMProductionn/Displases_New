import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../../../types/TypeCategory'



const initialState: ICategory = {
  categoryBtn: -1,
  sale: false, 
  newCol: false,
  selectCategory: '',
  skeleton: true,
  product_name: '',
  burger: false
}

export const Category = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    getColorCategoryBtn: (state, action: PayloadAction<number>) => {
      state.categoryBtn = action.payload;
    },
    removeColorCategoryBtn: (state) => {
      state.categoryBtn = -1
    },
    selectedCategory: (state, action: PayloadAction<string>) => {
      state.selectCategory = action.payload
    },
    setSkeleton: (state, action: PayloadAction<boolean>) => {
      state.skeleton = action.payload
    },
    setProductName(state, action: PayloadAction<string>) {
      state.product_name = action.payload;
    },
    setBurger: (state, action: PayloadAction<boolean>) => {
      state.burger = action.payload
    }
  },
})


export const { setProductName, getColorCategoryBtn, selectedCategory, removeColorCategoryBtn, setSkeleton, setBurger } = Category.actions;


export default Category.reducer