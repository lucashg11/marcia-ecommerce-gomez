import './ItemListContainer.css'
import { Products } from '../components/Item'; 
import { ItemList } from '../components/ItemList';
import { useState, useEffect } from 'react';


export const ItemListContainer = ()=>{
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        fetch({Products})
        .then((res)=>res.json)
        .then(data => {
            setProductList(data.results)
        })
    }, [productList]);
    


   return (
       <div className="itemlistContainer">
           {productList?.map((product)=>{return(
                    <ItemList key={product.picture} item = { product } />
                    )
                }
            )
           }
       </div>
    );
};