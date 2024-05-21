import React from 'react';
import BannerNewCol from '../components/MainBanners/NewCol';
import BannerSale from '../components/MainBanners/Sale';

export default function Home() {

  return (
    <div className={`banners flex gap-[30px] justify-center`}>
      <BannerSale />
      <BannerNewCol />
    </div>
  );
}



