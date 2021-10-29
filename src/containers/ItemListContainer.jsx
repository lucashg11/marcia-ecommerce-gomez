import './ItemListContainer.css'
import { ItemList } from '../components/ItemList';
import { useState, useEffect } from 'react';


export const ItemListContainer = ()=>{
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
    fetch("Item.json")
        .then((res)=>res.json())
        .then(data => {
            setProductList(data)
        })
    }, [productList]);
    


   return (
       <div className="itemlistContainer">
           {productList?.map((product)=>{return(
                    <ItemList  item = { product } />
                    )
                }
            )
           }
       </div>
    );
};