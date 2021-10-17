import '../itemCount/ItemCount.css';
import CartLogo from "../itemCount/CartLogo.svg"
import { useState, useEffect } from 'react';


export const ItemCount = ()=> {
const [count, setCount] = useState(1);
const stock = 10

const upCount = ()=> {
    setCount(count + 1)
}

const downCount = ()=> {
    setCount(count - 1)
}

useEffect(() => {
  if (count < 1){
      setCount(1);
      alert("No puedes ordenas menos de 1 producto");
  } else if(count === stock + 1){
    setCount(stock)
    alert("Alcanzaste el maximo de stock");
  };
}, [count, stock]);


    return (
        <>
            <div className="counterContainer">
                <button className="counterButton" onClick={downCount}> - </button>
                <p>{count}</p>
                <button className="counterButton" onClick={upCount}> + </button>
                <button className="cartButton"><img src={CartLogo}alt="" /></button>
            </div>

        </>
    )
}