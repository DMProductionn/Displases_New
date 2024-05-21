import { ReactNode, useEffect, useState } from "react";
import React from "react";
import OneProductCart from "../components/CartStatus/OneProductCart";
import ClearCart from "../components/CartStatus/ClearCart";
import SeveralProducts from "../components/CartStatus/SeveralProducts";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootStore } from "../components/redux/store";


const Cart: React.FC = () => {
    const dispatch = useDispatch();

    const { cart } = useSelector((state: TypeRootStore) => state.Cart);

    const [content, setContent] = useState<ReactNode>(null);
      

    // Проверка на кол-во эл-ов в корзине
    useEffect(() => {
      
        if (cart?.length === 0) {
            setContent(<ClearCart />);
        } else if (cart?.length === 1) {
            setContent(<OneProductCart  />);
        } else if (cart?.length > 1) {
            setContent(<SeveralProducts />);
        }
    }, [cart]);

    console.log(cart);
    

    return (
      <>
      {
        content
      }
      </>
    )
}

export default Cart
