import React, { useEffect } from 'react';
import BannerNewCol from '../components/MainBanners/NewCol';
import BannerSale from '../components/MainBanners/Sale';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getColorCategoryBtn } from '../components/redux/Slices/Category';

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.innerWidth < 1200) {
      dispatch(getColorCategoryBtn(0))
    } else {
      dispatch(getColorCategoryBtn(-1))
    }  
  }, [])


  return (
    <div className={`banners flex gap-[30px] justify-center`}>
      <BannerSale />
      <BannerNewCol />
    </div>
  );
}



