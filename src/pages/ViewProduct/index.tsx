import React, { useEffect } from 'react';
import { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import './ViewProduct.css';
import { TypeRootStore } from '../../components/redux/store';
import { setCart } from '../../components/redux/Slices/Cart.slice';
import BackBtnView from '../../components/Buttons/BackBtn/BackBtnView';



export default function ViewProduct() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { selectedProduct } = useSelector((state: TypeRootStore) => state.Products);
  const [selectedSize, setSelectedSize] = useState('');
  const [errorSize, setErrorSize] = useState(false);
  const [quantity, _] = useState(1);
  const { cart } = useSelector((state: TypeRootStore) => state.Cart);


  const options = [
    {id: 1, value: 'S', label: 'S' },
    {id: 2, value: 'M', label: 'M' },
    {id: 3, value: 'L', label: 'L' },
    {id: 4, value: 'XL', label: 'XL' },
    {id: 5, value: 'XXL', label: 'XXL' },
  ]

 const addToCart = () => {

  if (!selectedSize) {
    setErrorSize(true)
  }
  if (selectedSize) {
    setActive(true);
  }
  setFillHeight(100);

  const productAdd = {
    selectedProduct: selectedProduct,
    selectedSize: selectedSize,
    total: {
      quantity: quantity,
      // @ts-ignore 
      total_price: quantity * selectedProduct.price
    }
  };

  // Проверяем, есть ли уже продукт с таким же id в корзине
  // @ts-ignore 
  const existingProductIndex = cart.findIndex(item => item.selectedProduct.id === selectedProduct.id);
  // @ts-ignore 
  const existingProductSize = cart.findIndex(item => item.selectedSize === selectedSize);
  

  if (existingProductIndex !== -1 && existingProductSize !== -1) {
    // Если продукт уже есть в корзине, увеличиваем его количество
    // @ts-ignore 
    const existingProduct = cart[existingProductIndex];
    // @ts-ignore 
    const updatedQuantity = existingProduct.total.quantity + quantity;

    const updatedProduct = {
      // @ts-ignore 
      ...existingProduct,
      total: {
        // @ts-ignore 
        ...existingProduct.total,
        quantity: updatedQuantity,
        // @ts-ignore 
        total_price: updatedQuantity * selectedProduct.price
      }
    };

    // Обновляем корзину, заменяя существующий продукт на обновленный
    {/* @ts-ignore */}
    const updatedCart = [...cart];
    {/* @ts-ignore */}
    updatedCart[existingProductIndex] = updatedProduct;
    {/* @ts-ignore */}
    dispatch(setCart(updatedCart));
  } else {
    // Если продукта с таким id нет в корзине, просто добавляем новый продукт
    if (selectedSize) {
      dispatch(setCart([...cart, productAdd]));
    }
  }
};

  const handleChange = (selectedOption: SingleValue<any>, actionMeta: ActionMeta<any>) => {
    if (actionMeta.action === 'select-option') {
      setSelectedSize(selectedOption.value);
    }
  };

  const setFillHeight = (height: number) => {
    const element = document.querySelector('.view_wrapper');
    if (element) {
      // @ts-ignore 
      element.style.height = `${height}%`;
    }
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setIsMobile(true)
    }

    if (selectedSize) {
      setErrorSize(false)
    }

  }, [window.innerWidth, isMobile, selectedSize]);

  const modifiedImagePathFront = selectedProduct?.imgFront.replace("/public", "");
  const modifiedImagePath = selectedProduct?.image.replace("/public", "");
  

  return (
    <>
      {
        (
          <div className={isMobile && active ? 'view_wrapper active_v relative' : 'view_wrapper relative'}>
            {<div className={active ? 'product_active active' : 'product_active'}></div>}
            {
               
              <>
              <BackBtnView />
            <div className="flex flex-warp product__info gap-[40px] mt-[60px] mb-[25px] w-full">
              <div className="w-full z-[99] img__wrapper-view">
                <div className="border-[1px] border-gray-light max-w-[535px] w-full mb-[12px] rounded-[6px]">
                  <img
                    className="p-[20px]"
                    src={modifiedImagePathFront}
                    alt="hoodie"
                  />
                </div>
                <div className="flex gap-[10px] double_img">
                  <div className="border-[1px] border-gray-light max-w-[263px] w-full rounded-[6px]">
                    <img
                      className="p-[20px]"
                      src={modifiedImagePath}
                      alt="hoodie"
                    />
                  </div>
                  <div className="border-[1px] border-gray-light max-w-[263px] w-full rounded-[6px]">
                    <img
                      className="p-[20px]"
                      src={modifiedImagePath}
                      alt="hoodie"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full z-[99]">
                <p className="text-[30px] leading-[125%] mb-[10px]">
                  DISPLASES <br /> {selectedProduct?.name} 
                </p>
                <div className="mt-[8px] gap-[10px] relative">
                  <div className="flex mb-[10px] gap-[8px]">
                    <p className="text-[22px] leading-[110%]">{selectedProduct?.price}₽</p>
                  </div>
                  <div className='mb-[5px] h-[20px]'>
                    {errorSize && <p className='text-red text-[14px]'>Выберите размер!</p>}
                  </div>
                  <div className="flex gap-[20px] btn_view_block">

                    <Select
                      options={options}
                      onChange={handleChange}
                      className='select-container'
                      classNamePrefix='select'
                      placeholder='РАЗМЕР'
                      isSearchable={false}
                    />

                    
                      <button onClick={addToCart} className="bg-[#F64343] h-[38px] w-full text-[14px] font-[700] rounded-[6px] flex justify-center items-center view_btn">
                        ДОБАВИТЬ В КОРЗИНУ
                      </button>

                  </div>

                  <div className="flex flex-col gap-[20px] mt-[20px]">
                    <div className='leading-[125%]'>
                      <p className='text-[12px]'>Ткань: футер 3-х нитка 340гр</p>
                      <p className='text-[12px]'>Лекала: умеренный оверсайз</p>
                      <p className='text-[12px]'>Нанесение: тафтинг</p>
                      <p className='text-[12px]'>Размеры: S / M / L / XL / XXL</p>
                    </div>
                    <div className='leading-[125%]'>
                      <p className='text-[12px]'>Указания по стирке: стирать на 30 градусах</p>
                      <p className='text-[12px]'>Указания по размерам:</p>
                      <p className='text-[12px]'>S - рост 165-170см</p>
                      <p className='text-[12px]'>М - рост 170-180см</p>
                      <p className='text-[12px]'>L - рост 180-185см</p>
                      <p className='text-[12px]'>XL - рост 185+см</p>
                      <p className='text-[12px]'>XXL - рост 190+см</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
            }
          </div>
        )
      }
    </>
  );
}
