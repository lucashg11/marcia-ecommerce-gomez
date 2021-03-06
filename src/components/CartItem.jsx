import { useCart } from "../context/CartContext";
import "./Components.scss";
import Trash from "../assets/images/trash.svg"

export const CartItem = ( {item} )=>{
    const { removeItem } = useCart();

    return(
        <div className="cart">
            <img className="cart__img" src={ item.image } alt=""/>
            <h3 className="cart__name">{ item.title } </h3>
            <p>{item.quantity}</p>
            <p className="cart__price"><span>{item.currency}</span>{ item.priceTotal }</p>
            <button className="cart__button--remove" onClick={()=>removeItem(item.itemId)}>Eliminar<img src={Trash} alt=""></img></button>
        </div>
    )
}