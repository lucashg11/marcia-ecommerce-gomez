import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { Products } from '../components/Item'; 
import { ItemList } from '../components/ItemList';


export const ItemListContainer = ()=>{
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        fetch({Products}).then((res)=>{
            setProductList(Products)
        }).catch((e)=>alert(e)) 
    }, [productList])


   return (
       <div className="itemlistContainer">
           {productList && productList.map(product=>{
               return(
                   <ItemList key={product.pictureUrl} item = {product} />
               )
           })}
       </div>
        
    );
};