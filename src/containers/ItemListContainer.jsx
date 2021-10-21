
import './ItemListContainer.css'
import { ItemCount } from '../components/ItemCount';
import { ItemList } from '../components/ItemList';
import { Products } from '../Products.json';
import { useState } from 'react';


export const ItemListContainer = ()=>{

const [products, setProducts]= useState([])
const [count, setCount] = useState(1);
const stock = 10;

const getData = (data)=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve(data);
            }else{
                reject("No se ha encontrado articulos");
            }
        }, 2000);
    });

    useEffect(() => {
       getData(Products)
        .then((res)=>setProducts(res))
        .catch((err)=>alert(err))
    }, [products]);


const upCount = ()=> {
    if(count>=10){
        alert('Alcanzaste el maximo de articulos a pedir')
    } else {
        setCount(count + 1)
    }
}
const downCount = ()=> {
    if(count > 1){
        setCount(count-1)
    } else {
        alert('No puedes agregar menos de un articulo al carrito')
    }
}






    return (
        <div className="itemlistContainer">
                {products.leng ? products.map((product)=>(
                    
                    <ItemList product={product} key = {product.id} />
                    <ItemCount count={count} stock={stock} onAdd={upCount} onRemove={downCount}/>

                )): "loading..."}
                
        </div>
    );
};