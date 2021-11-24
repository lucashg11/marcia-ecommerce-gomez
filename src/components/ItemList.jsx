import '../containers/Container.scss';
import { useState } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';

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
        <div className="card">
            <Link to={`/item/${item.id}`}>
                <img src={ item.image } alt="" className="card__img"/>
            </Link>
            <div className="card__body">
                <h3 className="card__title">{ item.title } </h3>
                <p className="card__description">{item.description}</p>
                <p className="card__price"><span>{item.currency}</span>{ item.price }</p>
                <ItemCount upCount={upCount} downCount={downCount} count={count}/>
            </div>
        </div>
    )
}