import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getColorCategoryBtn, selectedCategory, setBurger } from '../../../redux/Slices/Category';
import { useDispatch, useSelector } from 'react-redux';
import { TypeRootStore } from '../../../redux/store';

export default function CategoryBurger() {
  const dispatch = useDispatch();
  const { categoryBtn } = useSelector((state: TypeRootStore) => state.Category);
  const [category, _] = useState(['Главная', 'Все', 'Худи', 'Лонгсливы', 'Обувь', 'Аксессуары', 'Куртки']);

  const setCategoryBtn = (value: string, index: number) => {
    dispatch(getColorCategoryBtn(index));
    dispatch(selectedCategory(value));
    dispatch(setBurger(true))
  };

  return (
    <div className={`ml-[50px] gap-[15px] mb-[15px] flex flex-col pb-[15px]`}>
      {category.map((value, index) => (
        <Link key={index} to={value === 'Главная' ? '/' : `/category`}>
          <button
          className={
              categoryBtn === index
                ? `text-red cursor-pointer`
                : `text-[#fff] cursor-pointer`
            }
            onClick={() => setCategoryBtn(value, index)}
            >
            {value}
          </button>
        </Link>
      ))}
    </div>
  )
}
