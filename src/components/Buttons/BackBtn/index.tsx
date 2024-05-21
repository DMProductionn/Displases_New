import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { removeColorCategoryBtn } from '../../redux/Slices/Category';

export default function BackBtn() {
  const dispatch = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams()
  const path = searchParams.get('/category')

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    if (path) {
      dispatch(removeColorCategoryBtn())
    }
  }
  return (
    <div>
        <button
          onClick={goBack}
          className={`relative h-[40px] uppercase text-[12px] bg-gray-light rounded-[6px] flex items-center justify-center w-[103px] pt-[12px] pb-[10px]`}>
          <img
            className={`arrowBack mr-[4px]`}
            src="/public/img/icons/chevron-right-white.svg"
            alt="arrow"
          />
          BACK
        </button>
    </div>
  );
}
