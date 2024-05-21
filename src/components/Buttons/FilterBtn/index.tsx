import React from 'react';
import style from './FilterBtn.module.css';
import { setFilterMenu, setColorBtn, setPriceBtn } from '../../redux/Slices/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TypeRootStore } from '../../redux/store';

export default function FilterBtn() {
  const dispatch: AppDispatch = useDispatch();
  const { filterMenu, colorBtn, priceBtn } = useSelector((state: TypeRootStore) => state.Filter);
  
  // функция скрытия меню 

  const showFilter = () => {
    dispatch(setFilterMenu())
  }

  // функция скрытия меню с ценами

  const showPrice = () => {
    dispatch(setPriceBtn())
  }

  // функция скрытия меню с цветом

  const showColor = () => {
    dispatch(setColorBtn())
  }

  return (
    <div className={`flex relative`}>
      {/* Кнопка фильтры */}
      <button
      onClick={showFilter}
        className={ filterMenu ? `${style.filterBtn} ${style.active} duration-[500ms]` : `${style.filterBtn} duration-[500ms]`}>
        ФИЛЬТРЫ
        <svg
          className={filterMenu ? `${style.arrowFilterSvg}` : `${style.arrowFilterSvg} ${style.active}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            className={filterMenu ? `${style.active}` : ''}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z"
            fill="#fff"
          />
        </svg>
      </button>

      {/* Выпадающее меню с фильтрами */}
      <div
        className={ filterMenu ? `${style.active} ${style.FilterPopup}  z-[999]` : `${style.FilterPopup} z-[999]`}>
        <div className="px-[12px] flex justify-between items-center w-full h-[36px] bg-gray-light">
          <p className="text-[12px]">Цена</p>
          <button onClick={showPrice}>
            <img
              className={ priceBtn ? '' : `${style.arrow} ${style.active}`}
              width={16}
              height={16}
              src="./img/icons/chevron-right-white.svg"
              alt="arrow"
            />
          </button>
        </div>

        {/* фильтры цены */}
        <div className={ priceBtn ? `${style.price} ${style.active} duration-[500ms]` : `${style.price} duration-[500ms]`}>
          <ul>
            <li className={`py-[6px]`}>
              <button className="text-[12px] ml-[20px]">от 8к до 10к</button>
            </li>
            <li className={`${style.activePrice} py-[6px]`}>
              <button className="text-[12px] ml-[20px]">от 10к до 12к</button>
            </li>
            <li className={`py-[6px]`}>
              <button className="text-[12px] ml-[20px]">от 12к до 20к</button>
            </li>
          </ul>
        </div>

        <div className="px-[12px] flex justify-between items-center w-full h-[36px] bg-gray-light">
          <p className="text-[12px]">Цвет</p>
          <button onClick={showColor}>
            <img
              className={ colorBtn ? `` : `${style.arrow} ${style.active}`}
              width={16}
              height={16}
              src="./img/icons/chevron-right-white.svg"
              alt="arrow"
            />
          </button>
        </div>

        {/* фильтры цветов */}
        <div className={colorBtn ? `${style.color} ${style.active} duration-[500ms]`: `${style.color} duration-[500ms]`}>
          <ul>
            <li className={`py-[6px]`}>
              <button className="text-[12px] ml-[20px]">Синий</button>
            </li>
            <li className={`py-[6px]`}>
              <button className="text-[12px] ml-[20px]">Белый</button>
            </li>
            <li className={`${style.activeColor} py-[6px]`}>
              <button className="text-[12px] ml-[20px]">Черный</button>
            </li>
            <li className={`py-[6px]`}>
              <button className="text-[12px] ml-[20px]">Серый</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
