import './Components.css';
import CartLogo from "../assets/images/CartLogo.svg"


export const ItemCount = ({count, stock, onAdd, onRemove})=> {


    return (
        <>
            <div className="counterContainer">
                <button className="counterButton" onClick={onRemove}> - </button>
                <p stock={stock}>{count}</p>
                <button className="counterButton" onClick={onAdd}> + </button>
                <button className="cartButton"><img src={CartLogo}alt="" />Agregar al carrito</button>
            </div>

        </>
    )
}