import React from "react";
import { TypeProductProps } from "../../types/TypeProduct";
import '../../pages/Category/Category.css'

const Product: React.FC<TypeProductProps> = ({ imgFront, name, price}) => {
 

  return (
    <div className="cursor-pointer rounded-[6px] justify-center items-center border-[1px] border-[#333232] p-[15px] w-full max-w-[350px] duration-[500ms]  hover:bg-[#333232]">
      
      <div className="h-[100px] div__img">
        <img
        className="mb-[12px] h-[170px] mx-auto product__img"
        src={imgFront}
        alt="Товар"
      />
      </div>
      <div className="flex flex-col items-start mt-[75px] ttt">
        <div className="mb-[8px]">
          <p className="text-[12px] text-[#fff]">{name}</p>
          <p className="text-[12px] text-[#fff]">I DONT CARE in Gray</p>
        </div>
        <div className="flex gap-2 justify-center">
          <p className="text-[14px] text-[#fff]">{price + '₽'}</p>
        </div>
      </div>
    </div>
  );
}

export default Product
