import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigator = useNavigate();
   const [cardData, setCardData] = useState([]) 
   const API = 'http://localhost:8081/cart/all';

   const fetchGet = async (url) =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)
        setCardData(data);
    }catch(error){
        console.log(error);
    }
}

useEffect (()=>{
    fetchGet(API);
},[])

function handleCheckout(){
navigator('/thanks');
}


function handleRemove(prod){
    fetch(
        `http://localhost:8081/cart/`+prod.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        },
        {
          mode: "cors",
        }
      )
        .then((data) => {
          
            setCardData(prev => prev.filter(p=>p!==prod));

        })
        
}

  return <>
  {cardData && cardData.map((prod)=>
      <div
          className="px-2 py-4 m-  border-solid border-2 border-gray-500 sm:rounded-md flex "
          key={prod.id}
        >
          <img className="w-48" src={prod.image} alt={prod.name} />

          <div className="px-4">
            <h1 >{prod.name}</h1>
            <p>Price : {prod.price}</p>
            <p>
                Quantity : {prod.quantity}
            </p>
            <p>Total Price : {prod.totalPrice} </p>
          </div>
          <div className="  ">
            <button 
            className='bg-red-400  sm:rounded-md px-3 py-1 text-yellow-100 hover:bg-red-700'
            onClick={()=>{handleRemove(prod)}}
            >
            Remove</button></div>
        </div>
        )}

        <div className=" pt-4 text-center font-bold">
            Grand Total : RS. {cardData && getGrandTotal(cardData)}/= 
        </div>
        <div>
        
          <button 
            className='bg-green-400 sm:rounded-md px-2 mx-6 py-1 mt-2 text-yellow-100 hover:bg-green-700 '
            onClick={()=>{handleCheckout()}}
            >
            Check Out</button>
            <Link
          className="bg-gray-400 mx-8 sm:rounded-md px-2 py-2   text-white hover:bg-gray-700 float-right"
          to="/"> Return To Home </Link>
        </div>
    </>
}
function getGrandTotal(data){
    let grandTotal = 0;
    for (let i = 0; i < data.length; i++) {
      grandTotal += data[i].totalPrice;
    }
    return grandTotal;
}

export default ShoppingCart
