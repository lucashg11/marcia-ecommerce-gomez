import './Components.css';
import '../containers/Container.css';
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
        <div className="itemDetailContainer">
            <img src={item.picture} alt="" className="itemDetailImg"/>
            <div className="itemDetailInfo">
                <h1>{item.title}</h1>
                <h4>{item.description}</h4>
                <p>{item.price}</p>
                <ItemCount onAdd={upCount} onRemove={downCount} count={count}/>
            </div>
        </div>
    )
}