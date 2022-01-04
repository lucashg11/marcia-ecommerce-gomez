import { CartItem } from "../components/CartItem";
import { useCart } from "../context/CartContext"
import "./Container.scss";
import { Link } from "react-router-dom";

export const CartContainer = ()=>{
    const {cart, clearCart} = useCart();
    let allPrices = cart.map((product)=>product.price*product.quantity)

    let totalPrices = allPrices.reduce((a, b)=> a+b, 0)

    return (
        <div className="cartContainer">
            <h1 className="cart__title">Carrito de Compras</h1>
                {cart.length === 0
                ? "Tu carrito esta vacio"
                :
                cart.map((product)=>(<CartItem key={product.itemId} item={product}/>)) 
                }
            <div>
                {cart.length!==0
                ? (
                    <>
                        <h1 className="cart__priceTotal">Total $ {totalPrices}</h1>
                        <Link to="/checkout">
                            <button className="cart__button--finish">Finalizar Compra</button>
                        </Link>
                        <button onClick={clearCart} className="cart__button--clear">Vaciar carrito</button>
                    </>
                )
                : 
                (<Link to="/"><button className="cart__button--prodpage">Ver productos</button></Link>)
                }
            </div>

        </div>
    
    )
}