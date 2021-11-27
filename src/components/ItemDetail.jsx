import './Components.scss';
import '../containers/Container.scss';
import {ItemCount} from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export const ItemDetail = ({item})=>{
    const [count, setCount] = useState(1);
    const [flag, setFlag]= useState(true);
    const [ quantity, setQuantity ] = useState(null);

    const { addItem } = useCart();

    const onAdd = (quantityToAdd)=>{
        quantityToAdd = count;
        if(quantityToAdd>=1){
            setQuantity(quantityToAdd);
            item.quantity = quantityToAdd;
            addItem(item);
            item.stock = item.stock - quantityToAdd;
            item.priceTotal = item.price * quantityToAdd;
            setFlag(false);
        }
    }

    const upCount = ()=> {
        if(count === item.stock){
            alert('Alcanzaste el maximo de articulos a pedir')
        } else {
            setCount(count + 1)
        }
    }
    const downCount = ()=> {
        if(count === 1){
            alert('No puedes agregar menos de un articulo al carrito')
        } else {
            setCount(count-1)
        }
    };

       return (
        <div className="detailCard">
            <img src={ item.image } alt="" className="detailCard__img"/>
            <div className="detailCard__body">
                <h1 className="detailCard__title">{ item.title }</h1>
                <h4 className="detailCard__description">{ item.description }</h4>
                <p className="detailCard__price"><span>{ item.currency }</span>{ item.priceTotal ? item.priceTotal : item.price }</p>
                {!flag? 
                    <Link to="/cart">
                        <button className="detailCard__finish">Terminar Compra</button>
                    </Link>
                    : 
                    <ItemCount onAdd={onAdd} upCount={upCount} downCount={downCount} count={count}/>
                }
                
            </div>
        </div>
    )
}