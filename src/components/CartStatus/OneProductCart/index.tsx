import React from 'react';
import style from './OneProductCart.module.css';
import BackBtn from '../../Buttons/BackBtn';
import { useDispatch, useSelector } from 'react-redux';
import { TypeRootStore } from '../../redux/store';
import { setCart } from '../../redux/Slices/Cart.slice';



const OneProductCart: React.FC = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: TypeRootStore) => state.Cart)
  

  const deleteAllItem = () => {
    dispatch(setCart([]))
  }
  // @ts-ignore
  const modifiedImagePathFront = cart?.[0]?.selectedProduct?.imgFront.replace("/public", "");
  // @ts-ignore
  const modifiedImagePath = cart?.[0].selectedProduct?.image.replace("/public", "");


  return (
    // @ts-ignore
    <div className="bg-gray-main rounded-[6px] pt-[12px] p-[20px] h-[auto] relative">
      {
        <>
        <div className="flex flex-wrap justify-between gap-[10px]">
        <div className=''>
          <BackBtn />
        </div>
        <div className={`${style.title} flex`}>
          <p className="uppercase leading-[100%] m-auto mt-[10px] text-[22px] font-Floripa">Корзина</p>
        </div>
        <div className='w-[103px] h-auto'></div>
      </div>
      <div className={`${style.wrapper_img} flex gap-[10px] mt-[20px] mb-[40px] flex-wrap`}>
        <div
          className={`${style.hoodieBig} flex justify-center border-[1px] border-gray-light w-full max-w-[820px] mb-[12px] rounded-[6px] h-[480px]`}>
          <img
            className="p-[20px]"
            // @ts-ignore
            src={cart.length !== 0 && modifiedImagePathFront}
            alt="hoodie"
          />
        </div>
        <div className={`${style.hoodieSmallWrapper} gap-[10px] flex flex-col`}>
          <div
            className={`${style.hoodieSmallBlock} p-[20px] w-[300px] h-[235px] border-[1px] border-gray-light rounded-[6px] flex justify-center`}>
            <img
              className={`${style.hoodieSmall} h-[200px]`}
              // @ts-ignore
              src={cart.length !== 0 && modifiedImagePath}
              alt="hoodie"
            />
          </div>
          <div
            className={`${style.hoodieSmallBlock} p-[20px] w-[300px] h-[235px] border-[1px] border-gray-light rounded-[6px] flex justify-center`}>
            <img
              className={`${style.hoodieSmall} ${style.hoodieSmall} h-[200px]`}
              // @ts-ignore
              src={cart.length !== 0 && modifiedImagePath}
              alt="hoodie"
            />
          </div>
        </div>
      </div>
      <div>
        {/* @ts-ignore */}
        <p className="text-[24px] 3sm:text-[30px] font-[700] leading-[125%] mb-[10px]">{cart.length !== 0 && cart?.[0].selectedProduct?.name} {cart.length !== 0 && cart?.[0].selectedSize ? '-' + ' ' + cart?.[0].selectedSize : ''}</p>
        <div className="flex gap-[25px] items-center mb-[25px] flex-wrap">
          <div className="flex gap-[10px] items-center flex-wrap">
            <p className="text-[22px] leading-[100%]">
              {/* @ts-ignore */}
              Количество: <span> {cart.length !== 0 && cart?.[0].total.quantity}</span>
            </p>
          </div>
          <p className="text-[#F64343] text-[22px] leading-[99%]">-20%</p>
        </div>
        <div className="flex mb-[20px] gap-[8px]">
          {/* @ts-ignore */}
          <p className="text-[22px] leading-[110%]">{cart.length !== 0 && cart?.[0].total.total_price}р</p>
        </div>
        <div className={`${style.buttons_wrapper} flex buttons_wrapper gap-[10px]`}>
          <button className="uppercase bg-red w-full h-[40px] 3sm:text-[14px] font-[700] rounded-[6px] flex justify-center items-center">
            ОФОРМИТЬ ЗАКАЗ
          </button>
          <button onClick={deleteAllItem} className="uppercase bg-gray-light w-full h-[40px] 3sm:text-[14px] font-[400] rounded-[6px] flex justify-center items-center">
            ОЧИСТИТЬ КОРЗИНУ
          </button>
        </div>
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div>
            <p className="text-[12px]">Ткань: футер 3-х нитка 340гр</p>
            <p className="text-[12px]">Лекала: умеренный оверсайз</p>
            <p className="text-[12px]">Нанесение: тафтинг</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">договор оферты</a>
              </li>
              <li>
                <a href="#">политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">заявление на возврат</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
      }
    </div>
  );
}

export default OneProductCart
