import React from 'react';
import style from './MainBannerSale.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProducts } from '../../redux/Slices/products.slice';


export default function BannerSale() {
  const dispatch = useDispatch();

  const obj = {
    id: 1,
    name: 'Displases Hoodie SHTRIH in Gray',
    price: 12000,
    image: '/img/Clothes/Hoodies/Hoodie-gray-back.webp',
    imgFront: '/img/Clothes/Hoodies/Hoodie-gray-front.webp',
    category: 'Худи'
  }


  return (
    <>
      <div
        className={`relative py-[20px] h-[850px] max-w-[570px] rounded-[12px] w-full bg-[#1D1D1D] ${style.mainBlock}`}>
        <div className={`flex items-center h-[30px] pl-[20px] ${style.titleBlock}`}>
          <svg
            className="mr-[5px]"
            xmlns="http://www.w3.org/2000/svg"
            width="117"
            height="17"
            viewBox="0 0 117 17"
            fill="none">
            <path
              d="M21.9903 4.9999H9.86242C9.48286 4.9999 9.29308 5.18251 9.29308 5.54775C9.29308 5.71246 9.34321 5.84495 9.44347 5.94521C9.54373 6.04547 9.67622 6.0956 9.84093 6.0956H18.6173C20.4578 6.0956 22.0978 6.1887 23.5372 6.3749C24.9767 6.56109 26.2335 6.85113 27.3077 7.24501C28.3819 7.63173 29.2055 8.15094 29.7784 8.80263C30.3513 9.44716 30.6378 10.2099 30.6378 11.0907C30.6378 11.8713 30.2976 12.591 29.6173 13.2499C28.9441 13.9016 28.0346 14.4387 26.8888 14.8612C25.743 15.2838 24.4252 15.6418 22.9357 15.9354C21.4532 16.2291 19.892 16.4045 18.2521 16.4618C16.6121 16.5191 14.9721 16.5119 13.3321 16.4403C11.6922 16.3687 10.131 16.1789 8.64855 15.871C7.16613 15.563 5.852 15.1907 4.70617 14.7538C3.56033 14.317 2.65083 13.7619 1.97765 13.0888C1.30448 12.4156 0.971467 11.678 0.978629 10.8759H8.01476C8.01476 11.1122 8.16873 11.2912 8.47668 11.413C8.78462 11.5347 9.10688 11.5956 9.44347 11.5956H22.2911C22.4558 11.5956 22.5883 11.5455 22.6886 11.4452C22.796 11.3449 22.8497 11.2125 22.8497 11.0477C22.8497 10.6825 22.6564 10.4999 22.2696 10.4999H10.4425C9.977 10.4856 9.50434 10.4569 9.02453 10.414C8.55187 10.3638 8.01118 10.2886 7.40246 10.1884C6.80089 10.081 6.23156 9.95563 5.69445 9.8124C5.1645 9.66201 4.63813 9.46865 4.11535 9.23232C3.59256 8.98883 3.14139 8.72027 2.76183 8.42665C2.38944 8.12587 2.08507 7.76064 1.84875 7.33095C1.61958 6.90126 1.505 6.43219 1.505 5.92373C1.505 5.07867 1.83442 4.30524 2.49328 3.60341C3.15929 2.90159 4.05089 2.32509 5.16808 1.87392C6.28527 1.41559 7.56717 1.02887 9.01379 0.713764C10.4604 0.39866 11.9822 0.208882 13.5792 0.144428C15.1834 0.0728139 16.784 0.0692331 18.381 0.133686C19.9851 0.198139 21.5105 0.387918 22.9571 0.703022C24.4109 1.01096 25.6928 1.38694 26.8028 1.83095C27.92 2.2678 28.8081 2.82998 29.4669 3.51748C30.1258 4.19781 30.4552 4.94261 30.4552 5.75185H23.4191C23.4191 5.51552 23.2615 5.3329 22.9464 5.204C22.6385 5.06793 22.3198 4.9999 21.9903 4.9999Z"
              fill="white"
            />
            <path
              d="M55.2911 15.9999L52.1222 10.4999H40.5743L37.3839 15.9999H29.7892L38.6515 0.5956H54.0128L62.8751 15.9999H55.2911ZM43.0987 6.0956H49.5655L48.9318 4.9999H43.7325L43.0987 6.0956Z"
              fill="white"
            />
            <path
              d="M64.2071 15.9999V0.5956H70.8028V11.5956H89.0646V15.9999H64.2071Z"
              fill="white"
            />
            <path
              d="M97.6368 10.4999V11.5956H117.005V15.9999H91.0411V0.5956H115.899V4.9999H97.6368V6.0956H112.826V10.4999H97.6368Z"
              fill="white"
            />
          </svg>
          <p className={`text-[#F64343] text-[22px] text-[700] ${style.saleText}`}>-20%</p>
        </div>
        {/* карточка баннера */}
        
          <Link to={`/category/${obj.name}`} onClick={() => dispatch(setSelectedProducts(obj))} className="absolute cursor-pointer right-[20px] top-[20px] w-[160px] rounded-[6px] border-[1px] border-[#333232]">
            <img
              width={160}
              height={140}
              src="/img/Clothes/Hoodies/Hoodie-gray-front.webp"
              alt=""
            />
            <div className="p-[15px] pt-[6px]">
              <p className="text-[10px]">DISPLASES Hoodie SHTRIH in Gray</p>
              <div className="flex mt-[8px] gap-[5px]">
                <p className="text-[10px]">12 000р</p>
                <p className="text-[#717171] line-through text-[10px]">15 500р</p>
              </div>
            </div>
          </Link>
        <img
          width={350}
          className="absolute right-0 bottom-0 rounded-[12px]"
          src="./img/elipse-red.png"
          alt="elipse"
        />
      </div>
    </>
  );
}
