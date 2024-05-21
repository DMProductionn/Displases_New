
import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { TypeRootStore } from '../../../redux/store';
import { setCart } from '../../../redux/Slices/Cart.slice';

const CartItem: React.FC<typeCart> =({ name, quantity, total_price, image, size, product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: TypeRootStore) => state.Cart);

  // @ts-ignore
  const deleteItem = () => {
    {/* @ts-ignore */}
      const cartNew = cart.filter((item) => item.selectedProduct.id !== product.selectedProduct.id);
      dispatch(setCart(cartNew));
}

// @ts-ignore
const modifiedImagePathFront = image.replace("/public", "");

  

  return (

    <div className='flex justify-between border-[1px] min-h-[120px] border-gray-light rounded-[6px] gap-[20px] relative'>

      <div className="flex justify-between w-full py-[10px] pl-[10px]"> {/* Инфо  */}
        <div className="flex items-center content-center gap-[20px]"> {/*элемент */}
          <img
            width={100}
            height={90}
            src={modifiedImagePathFront}
            alt="hoodie"
          />
        
          <div className="flex items-start flex-col min-w-[160px]">
            <div className='wrapper__text-cart'>
              <p className='text-white text-[16px] font-[400] uppercase leading-[125%]'>DISPLASES Longsleeve <br /> {name} {size ? '-' + ' ' + size : ''}</p>
              <p className='text-[#F64343] text-[16px] font-[700] leading-[125%]'>-20%</p>
              <p className={`q_one text-white text-[16px] font-[400] leading-[125%] hidden`}>Количество: {quantity}</p>
              <p className='p_one text-white mt-[5px] text-[16px] font-[400] leading-[125%] hidden'>{total_price}₽</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <p className='text-white text-[16px] font-[400] leading-[125%] q_two'>Количество: {quantity}</p>
          </div>
            <div className="flex flex-col gap-[5px] justify-center p_two"> {/* Цена  */}
              <p className='text-white text-right text-[16px] font-[400] leading-[125%]'>{total_price}₽</p>
            </div>
        </div>
        
      </div>
      {/* Корзина */}
      <button onClick={deleteItem} className='btn_delete-one rounded-r-[6px] bg-[#333232] px-[20px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.125 1.25C2.43464 1.25 1.875 1.80964 1.875 2.5V3.75C1.875 4.44036 2.43464 5 3.125 5H3.75V16.25C3.75 17.6307 4.86929 18.75 6.25 18.75H13.75C15.1307 18.75 16.25 17.6307 16.25 16.25V5H16.875C17.5654 5 18.125 4.44036 18.125 3.75V2.5C18.125 1.80964 17.5654 1.25 16.875 1.25H12.5C12.5 0.559644 11.9404 0 11.25 0H8.75C8.05964 0 7.5 0.559644 7.5 1.25H3.125ZM6.875 6.25C7.22018 6.25 7.5 6.52982 7.5 6.875V15.625C7.5 15.9702 7.22018 16.25 6.875 16.25C6.52982 16.25 6.25 15.9702 6.25 15.625L6.25 6.875C6.25 6.52982 6.52982 6.25 6.875 6.25ZM10 6.25C10.3452 6.25 10.625 6.52982 10.625 6.875V15.625C10.625 15.9702 10.3452 16.25 10 16.25C9.65482 16.25 9.375 15.9702 9.375 15.625V6.875C9.375 6.52982 9.65482 6.25 10 6.25ZM13.75 6.875V15.625C13.75 15.9702 13.4702 16.25 13.125 16.25C12.7798 16.25 12.5 15.9702 12.5 15.625V6.875C12.5 6.52982 12.7798 6.25 13.125 6.25C13.4702 6.25 13.75 6.52982 13.75 6.875Z" fill="#F74343" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
