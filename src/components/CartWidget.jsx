import  CartLogo  from '../assets/images/CartLogo.svg';
import { useCart } from '../context/CartContext';
import './Components.scss';

export const CartWidget = ()=> {
    const { cart } = useCart()
    console.log(cart.length)
    return (
        <button className="cart__icon">
            {cart.length ? (
                <div>
                    <img src={CartLogo} alt="" />
                    <p>{cart.length}</p>
                </div>
            ):<img src={CartLogo} alt="" />}
        </button>

    )
}