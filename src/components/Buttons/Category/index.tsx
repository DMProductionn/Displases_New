import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getColorCategoryBtn, selectedCategory } from '../../redux/Slices/Category';

import './CategoryBtn.css';
import { TypeRootStore } from '../../redux/store';

export default function Category() {
  const [category, _] = useState(['Все', 'Худи', 'Лонгсливы', 'Обувь', 'Аксессуары', 'Куртки']);
  const dispatch = useDispatch();
  const { categoryBtn } = useSelector((state: TypeRootStore) => state.Category);
  

  const setCategoryBtn = (value: string, index: number) => {
    dispatch(getColorCategoryBtn(index));
    dispatch(selectedCategory(value))
  };

  return (
    <div className={`categoryWrapper hidden flex-wrap gap-[10px] mb-[15px]`}>
      {category.map((value, index) => (
        <Link key={index} to="/category">
          <button
            onClick={() => setCategoryBtn(value, index)}
            className={
              categoryBtn === index
                ? `active p-[8px] min-w-[115px] bg-gray-main rounded-[6px] text-gray-text`
                : `p-[8px] min-w-[115px] bg-gray-main rounded-[6px] text-gray-text`
            }>
            {value}
          </button>
        </Link>
      ))}
    </div>
  );
}
