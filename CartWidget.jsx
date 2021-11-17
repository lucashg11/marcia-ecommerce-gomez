import  CartLogo  from '../assets/images/CartLogo.svg';
import './Components.scss';

export const CartWidget = ()=> {
    return (
        <button className="cart">
            <img src={CartLogo} alt="carrito" />4
        </button>

    )
}