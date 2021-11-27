import { CartItem } from "../components/CartItem";
import { useCart } from "../context/CartContext"
import "./Container.scss";
import { Link } from "react-router-dom";

export const CartContainer = ()=>{
    const {cart, clearCart} = useCart();
    console.log(cart.map((carrito)=>carrito.quantity))

    return (
        <div className="cartContainer">
            <h1 className="cart__title">Carrito de Compras</h1>
                {cart.length 
                ? cart.map((inCart)=>(<CartItem key={inCart.itemId} item={inCart}/>)) 
                :"Tu carrito esta vacio"}
            <div>
                {cart.length!==0
                ? (<button onClick={clearCart} className="cart__button--clear">Eliminar carrito</button>)
                : 
                (<Link to="/"><button className="cart__button--prodpage">Ver productos</button></Link>)
                }
            </div>

        </div>
    
    )
}