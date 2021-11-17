import './Container.scss';
import { ItemDetail } from "../components/ItemDetail";  
import { useState , useEffect } from "react";
import { useParams } from 'react-router';

export const ItemDetailContainer = ()=>{
    
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
            fetch('Item.json')
            .then(res=>{res.json(); console.log(res.json())})
            .then(data=>setItem(data))


    }, [itemId])
    
    return(
        <div>
            {item ? <ItemDetail itemId={item.id}/> : "Cargando..."}
        </div>
    )

       
};