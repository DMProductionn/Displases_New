import React from 'react';
import style from './MainBannerNewCol.module.css';
import { useDispatch } from 'react-redux';
import { setSelectedProducts } from '../../redux/Slices/products.slice';
import { Link } from 'react-router-dom';

export default function BannerNewCol() {
  const dispatch = useDispatch()

  const obj = {
    id: 1,
    name: 'Displases Hoodie SHTRIH in Gray',
    price: 15500,
    image: '/public/img/Clothes/Longsleeves/Longsleeve-black-back.webp',
    imgFront: '/public/img/Clothes/Longsleeves/Longsleeve-black-front.webp',
    category: 'Лонгсливы'
  }

  return (
    <>
      <div className={`relative py-[20px] h-[850px] max-w-[570px] rounded-[12px] w-full bg-[#1D1D1D] ${style.mainBlock}`}>
        <div className="flex items-center h-[30px] pl-[20px]">
          <h3 className='font-Floripa w-[50px] text-[22px]'>NEW</h3>
        </div>
        {/* карточка баннера */}
        <Link to={`/category/${obj.name}`} onClick={() => dispatch(setSelectedProducts(obj))} className="absolute cursor-pointer right-[20px] top-[20px] w-[160px] rounded-[6px] border-[1px] border-[#333232]">
          <img
            width={160}
            height={140}
            src="/img/Clothes/Longsleeves/Longsleeve-black-front.webp"
            alt=""
          />
          <div className="p-[15px] pt-[6px]">
            <p className="text-[10px]">DISPLASES Hoodie SHTRIH in Gray</p>
            <div className="flex mt-[8px] gap-[5px]">
              <p className="text-[10px]">15 500р</p>
              <p className="text-[#717171] line-through text-[10px]">18 500р</p>
            </div>
          </div>
        </Link>
        <img
          width={350}
          className="absolute right-0 bottom-0 rounded-[12px]"
          src="./img/elipse-gray.png"
          alt="elipse"
        />
      </div>
    </>
  );
}
