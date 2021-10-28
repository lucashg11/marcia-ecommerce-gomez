import '../containers/ItemListContainer.css';
import { useState } from 'react';
import { ItemCount } from './ItemCount';

export const ItemList = ({ item })=> {
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
        <div className="itemList">
            <img src={ item.picture } alt="" className="itemImg"/>
            <h3>{ item.title } </h3>
            <p><span>{item.currency}</span>{ item.price }</p>
            <ItemCount onAdd={upCount} onRemove={downCount} count={count}/>
        </div>
    )
}