import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IProductItem {
  id: number
  name: string
  price: number
  image: string
  imgFront: string
  category : string
}

interface IProducts {
  products : IProductItem[],
  selectedProduct: null | IProductItem
}


const initialState: IProducts = {
  products: [
    {
      id: 1,
      name: 'Displases Hoodie SHTRIH in Gray',
      price: 12000,
      image: '/public/img/Clothes/Hoodies/Hoodie-black-back.webp',
      imgFront: '/public/img/Clothes/Hoodies/Hoodie-black-front.webp',
      category: 'Худи'
    },
    {
      id: 2,
      name: 'Displases Hoodie SHTRIH in Gray',
      price: 15500,
      image: '/public/img/Clothes/Longsleeves/Longsleeve-black-front.webp',
      imgFront: '/public/img/Clothes/Longsleeves/Longsleeve-black-front.webp',
      category: 'Лонгсливы'
    },
    {
      id: 3,
      name: 'Displases Hoodie SHTRIH in Gray',
      price: 20500,
      image: '/public/img/Clothes/Hoodies/Hoodie-beige-back.webp',
      imgFront: '/public/img/Clothes/Hoodies/Hoodie-beige-front.webp',
      category: 'Худи'
    }
  ],
  selectedProduct: null
}

export const Products = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setSelectedProducts: (state, action: PayloadAction< null | IProductItem >) => {
      state.selectedProduct = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload
    }
  },
})


export const { setSelectedProducts, setProducts } = Products.actions;


export default Products.reducer