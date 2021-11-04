import './Container.css';
import { ItemDetail } from "../components/ItemDetail";
import { useEffect, useState } from "react";


export const ItemDetailContainer = ()=>{
    const [productDetail, setProductDetail] = useState(null);
    useEffect(()=>{
    fetch("Item.json")
        .then((res)=>res.json())
        .then(data => {
            setProductDetail(data);
        });
    }, [productDetail])
    

   return (
       <div className="itemDetailContainer">
           {productDetail?.filter((items)=>items.id===1)
           .map((items, id)=>(
               <ItemDetail item={items} key={id}/>
           ))}
       </div>
    )
};