import React, { useEffect, useState } from 'react';
import BackBtn from '../../Buttons/BackBtn';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TypeRootStore } from '../../redux/store';
import { setCart, setQuantity } from '../../redux/Slices/Cart.slice';
import './Several.css';

export default function SeveralProducts() {
  const [totalPrice, setTotalPrice] = useState(0)
  const dispatch: AppDispatch = useDispatch()
  const { cart, total_quantity } = useSelector((state: TypeRootStore) => state.Cart)


  useEffect(()  => {
    const totalQuantity = cart?.reduce((acc: number, product: {total: {quantity: number}}) => acc + product.total.quantity, 0);
    dispatch(setQuantity(totalQuantity))
    setTotalPrice(cart?.reduce((acc: number, price: {total: {total_price: number}}) => acc + price.total.total_price, 0))
  }, [cart, total_quantity])

  const deleteAllItem = () => {
   dispatch(setCart([]))
  }
  
  const selectedDelete = (product: any) => {
    console.log(product);
  }
  

  return (
    <div className="bg-gray-main rounded-[6px] p-[20px] w-full">
      <div className="flex flex-wrap justify-between gap-[10px]">
        <div>
          <BackBtn />
        </div>
        <div>
          <p className="uppercase  m-auto text-[22px] font-Floripa">Корзина</p>
        </div>
        <div className='w-[103px] h-auto'></div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[15px]">
        {
          cart?.map((product: any) => (
            <CartItem
            product={product}
            key={product.selectedProduct.id} 
            name={product.selectedProduct.name}
            image={product.selectedProduct.imgFront}
            quantity={product.total.quantity}
            total_price={product.total.total_price}
            size={product.selectedSize}
            />
          ))
        }
      </div>
      <div className="flex flex-nowrap flex-col p-[20px] gap-[15px]">
        <p className='text-white text-[16px] font-[400] leading-[125%]'>Итого: {total_quantity} товара</p>
        <div className="flex flex-col gap-[5px] justify-center">
          <p className='text-white text-[16px] font-[400] leading-[125%]'>{totalPrice}₽</p>
        </div>
      </div>
      <div className="flex gap-[10px] w-full justify-between btns_wrapper">
          <button className="uppercase bg-red w-full h-[40px] font-[700] text-[14px] rounded-[6px] flex justify-center items-center">
            ОФОРМИТЬ ЗАКАЗ
          </button>
          <button onClick={deleteAllItem} className="uppercase bg-gray-light w-full h-[40px] text-[14px]  font-[400] rounded-[6px] flex justify-center items-center">
            ОЧИСТИТЬ КОРЗИНУ
          </button>
      </div>
    </div>
  );
}
