import  CartLogo  from '../assets/images/CartLogo.svg';
import { useCart } from '../context/CartContext';
import './Components.scss';

export const CartWidget = ()=> {
    const { cart } = useCart()
    console.log(cart.map((c)=>c.quantity))
    let allQtys= cart.map((c)=>c.quantity);
    let totalQtys = allQtys.reduce((a,b)=> a+b,0)
    return (
        <button className="cart__icon">
            {cart.length ? (
                <div>
                    <img src={CartLogo} alt="" />
                    <p>{totalQtys}</p>
                </div>
            ):<img src={CartLogo} alt="" />}
        </button>

    )
}