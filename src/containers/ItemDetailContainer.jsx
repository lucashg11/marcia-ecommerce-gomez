import './Container.scss';
import { useState, useEffect } from "react";
import { ItemDetail } from '../components/ItemDetail'
import { getFirestore } from '../firebase';
import { doc , getDoc } from '@firebase/firestore';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([])
    const { id } = useParams();
    
    
    useEffect(() => {
        const db = getFirestore();
        const docData = doc(db, "items", id )
        getDoc(docData).then((snapshot)=>{
            if(snapshot.exists()) {
    
                setItem(snapshot.data())
            }
        })
}, [id]);
         
    return(
        <div>
            <ItemDetail item={item}/>         
            
        </div>
    )

       
};