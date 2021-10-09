import  CartLogo  from '../CartWidget/CartLogo.svg';
import '../CartWidget/CartWidget.css';

export const CartWidget = ()=> {
    return (
        <button className="cart">
            <img src={CartLogo} alt="carrito" />4
        </button>

    )
}