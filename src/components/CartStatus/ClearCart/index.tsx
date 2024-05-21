import React from 'react';
import '../ClearCart/ClearCart.css';
import BackBtn from '../../Buttons/BackBtn';

export default function ClearCart() {
  return (
    <div className="bg-gray-main rounded-[6px] p-[20px]">
      <div className="flex flex-wrap justify-between gap-[10px]">
        <div>
          <BackBtn />
        </div>
        <div className='clear_title'>
          <p className="uppercase m-auto text-[22px]" style={{fontFamily: "Floripa"}}>Корзина</p>
        </div>
        <div className='w-[103px] h-auto'></div>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        <p className="text-[#717171] text-[22px] leading-[110%]">Пусто</p>
      </div>
    </div>
  );
}
