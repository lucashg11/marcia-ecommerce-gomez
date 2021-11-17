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

<<<<<<< HEAD
    }, [itemId])
    
    return(
        <div>
            {item ? <ItemDetail itemId={item.id}/> : "Cargando..."}
        </div>
=======
   return (
       <div className="itemDetailContainer">
           {productDetail?.filter((product)=>product.id===1)
           .map((product, id)=>(
               <ItemDetail item={product} key={id}/>
           ))}
       </div>
>>>>>>> 4dba3aa981c48c8530851e0c917afb1737f6bc4d
    )

       
};