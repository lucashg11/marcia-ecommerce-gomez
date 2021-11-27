import { isUWP } from "@firebase/util";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = ()=> useContext(CartContext);
export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity)=>{
        if(!isInCart(item.itemId)){
           setCart([...cart, item])
           
        }else{
            return ("Tu carrito esta vacio")
        }
    }

    const removeItem = (itemId)=>{
        const remove= cart.filter((item)=>item.itemId !== itemId)
        console.log(itemId)
        console.log(remove)
        setCart(remove)
    }

    const isInCart = (itemId)=>{
        const filteredCart = cart.filter(item => item.itemId === itemId);
        const isIn = filteredCart.length === 0 ? false : true;
        return isIn; 
    }

    const clearCart = ()=>{
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
