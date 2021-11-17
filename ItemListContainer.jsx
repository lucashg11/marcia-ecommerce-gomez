import './Container.scss';
import { ItemList } from '../components/ItemList';
import { useState, useEffect } from 'react';

export const ItemListContainer = ()=>{
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        fetch('Item.json')
        .then((res)=>res.json())
        .then(data =>setProductList(data))
    },[]);
    return(
        <div className="card__wrapper">
            {productList?.map(product=><ItemList key={product.id}item={product}/>)}
        </div>
    )
}