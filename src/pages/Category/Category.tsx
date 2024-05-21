import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProductName, setSkeleton } from '../../components/redux/Slices/Category';
import Product from '../../components/Product';
import Filter from '../../components/Buttons/FilterBtn';
import './Category.css';
import NotFound from '../../components/NotFound';
import Skeleton from '../../components/Skeleton';
import { TypeRootStore } from '../../components/redux/store';
import { IProductItem, setProducts, setSelectedProducts } from '../../components/redux/Slices/products.slice';
import BackBtn from '../../components/Buttons/BackBtn';



export default function Category() {
  const dispatch = useDispatch()
  const { selectCategory, skeleton } = useSelector((state: TypeRootStore) => state.Category);
  const { products } = useSelector((state: TypeRootStore) => state.Products);
  const [_, setFilteredProducts] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        dispatch(setSkeleton(false))
      }, 1000);
    }, [selectCategory])
    
    
    const onClickSelected = (obj: IProductItem) => {
      dispatch(setSelectedProducts(obj))
    }

    useEffect(() => {
      
      let filtered: any = products.filter((obj) => {
        return obj.category === selectCategory;
      });
      if (filtered) {
        setFilteredProducts(filtered);
      }
    }, [selectCategory]);

    
  
  
  return (
    <div className=" bg-gray-main rounded-[6px] w-full max-w-[1130px] px-[20px] py-3 min-h-[600px] relative">
      <div className="flex flex-wrap gap-[15px] items-center place-content-between mb-[15px]">
        <div className={`flex back`}>
          <BackBtn />
        </div>
        <div className={`flex title product__title`}>
          <h2 className="text-[18px] category__title sm:text-[24px] font-Floripa">{selectCategory}</h2>
        </div>
        <div className="flex flex-nowrap gap-[20px]">
          <Filter />
        </div>
      </div>
      <div className={`grid category__wrapper flex-wrap gap-[20px] wrapper relative`}>
        
        

     {
          skeleton ?
            <Skeleton count={6} />  :
            selectCategory === 'Все' ? products.map((obj: IProductItem, index: number) => (
              <Link className='w-full max-w-[350px]' onClick={() => onClickSelected(obj)} key={index} to={`/category/${obj.name}`}>
                <Product
                  key={obj.id}
                  imgFront={obj.imgFront}
                  name={obj.name}
                  price={obj.price}
                  image={obj.image}
                />
              </Link> 
            ))
            :
            products.filter(obj => obj.category === selectCategory).map((obj: IProductItem, index: number) => (
                  <Link className='w-full max-w-[350px]' onClick={() => onClickSelected(obj)} key={index} to={`/category/${obj.name}`}>
                    <Product
                      key={obj.id}
                      imgFront={obj.imgFront}
                      name={obj.name}
                      price={obj.price}
                      image={obj.image}
                    />
                  </Link>
                ))

        } 

        {
          selectCategory === 'Куртки' && <NotFound />
        }

        {
          selectCategory === 'Аксессуары' && <NotFound />
        }

        {
          selectCategory === 'Обувь' && <NotFound />
        }

      </div>
    </div>
  );
}
