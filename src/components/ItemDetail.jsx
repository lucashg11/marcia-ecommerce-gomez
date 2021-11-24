import './Components.scss';
import '../containers/Container.scss';
import {ItemCount} from './ItemCount';
import { useState } from 'react';

export const ItemDetail = ({item})=>{
    const [count, setCount] = useState(1);
    
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
                <p className="detailCard__price"><span>{ item.currency }</span>{ item.price }</p>
                <ItemCount upCount={upCount} downCount={downCount} count={count}/>
            </div>
        </div>
    )
}