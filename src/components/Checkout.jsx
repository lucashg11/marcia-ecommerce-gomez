import { useState } from 'react';
import {getFirestore} from '../firebase/index.js'; 
import {collection, addDoc} from 'firebase/firestore';
import {useCart} from '../context/CartContext';
import '../components/Components.scss';

export const Checkout = ()=>{
    const {cart, clearCart}= useCart();
    const [confirm, setConfirm] = useState(false);
    const [purchaseNum, setPurchaseNum] = useState(null);

    const db = getFirestore();

    const date = new Date();

    const purchase = cart;

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const [clientInfo, setClientInfo] = useState({
        name: "",
        phone: 0,
        email: "",
        address: "",
        addressNum: 0  
    })

    const setInfo = (e)=>{
        setClientInfo({
            ...clientInfo,
            [e.target.name]: e.target.value,
        });
    };

    const form = [
        {type: "text", name:"name", placeholder:"Nombre"},
        {type: "number", name:"phone", placeholder:"Telefono"}, 
        {type: "email", name:"email", placeholder:"Email"    },
        {type: "text", name:"address", placeholder:"Direccion"    },
        {type: "number", name:"addressNum", placeholder:"Numero de direccion"    }   
    ]

    const orderInfo = {
        comprador: clientInfo,
        productos: purchase,
        fecha: new Date(date).toLocaleDateString()
    };

    const createPurchase = ()=>{
        const Purchases = collection(db, "Purchases");
        addDoc(Purchases, orderInfo).then(({ id })=>{
            setPurchaseNum(id)
        });
        clearCart();
        setConfirm(true);
        document.getElementById("form").reset()

    };

    return (
        <>
        <h1>Completa con tus datos:</h1>
            <form id="form" className="checkout" onSubmit={handleSubmit} >
                <div className="checkout__form">
                    {form.map((key)=>(
                        <input 
                        type={key.type}
                        name={key.name}
                        placeholder={key.placeholder}
                        onChange={setInfo}
                        required/>
                    ))}
                </div>
                <div>
                    {confirm ? <div/> : <button className="checkout__button" type="submit" onClick={createPurchase}>Realizar pedido</button>}
                </div>
                <div>
                    {purchaseNum && (
                        <div className="checkout__confirm">
                            <h1>Su pedido ha sido confirmado</h1>
                            <p>Has realizado la orden de pedido Nº: <strong>{purchaseNum}</strong></p>
                        </div>
                    )}
                </div>  
            </form>
        </>
    )
}
