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
        <div className="cardContainer">
            {productList?.map(product=><ItemList key={product.id}item={product}/>)}
        </div>
    )
}