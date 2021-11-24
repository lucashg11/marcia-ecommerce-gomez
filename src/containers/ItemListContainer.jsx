import './Container.scss';
import { ItemList } from '../components/ItemList';
import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

export const ItemListContainer = ()=>{
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        const db = getFirestore();
        getDocs(collection(db, "items")).then(snapshot =>{
            setProductList(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })

        
    },[]);

    
    return(
        <div className="card__wrapper">
            {productList?.map(product=><ItemList key={product.itemId}item={product}/>)}
        </div>
    )
}