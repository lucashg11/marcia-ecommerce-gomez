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
           {productDetail?.filter((product)=>product.id===1)
           .map((product, id)=>(
               <ItemDetail item={product} key={id}/>
           ))}
       </div>
    )
};