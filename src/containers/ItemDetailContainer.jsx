import { useEffect, useState } from "react";
import { ItemDetail } from "../components/ItemDetail";

export const ItemDetailContainer = () => {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
    fetch("Item.json")
        .then((res)=>res.json())
        .then(data => {
            setProductList(data)
        })
    }, [productList]);
    return (
        <div>
        {productList?.map((product)=>{return(
            <ItemDetail item = { product}/>
            )})
        }
        </div>
    )
}