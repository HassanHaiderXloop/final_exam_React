import { InputNumber } from 'antd';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Product = ({prod}) => {
    const navigator = useNavigate();

  const [changeVlaue, setChnageValue] = useState(1);

    const onChangeValue = (event) => {
        setChnageValue(event);
        // console.log(changeVlaue);
      };
    
      const handleAddToCart = (prod) =>{
        if(changeVlaue > 0){
            const requestData={
                name : prod.name,
                image: prod.image,
                quantity: changeVlaue,
                totalPrice: Number(prod.price )* changeVlaue,
                price: Number(prod.price),
            }
            fetch(
                `http://localhost:8081/cart/add`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(requestData),
                },
                {
                  mode: "cors",
                }
                )
                .then((response) => response.json())
                .then((data) => {
                });
            }
            navigator('/shopping_cart')
    
      }
  return (
    <div
          className="px-2 py-2 m-2 border-solid border-2 border-gray-500 sm:rounded-md "
          key={prod.id}
        >
          <Link state={{ prod }} to={`/details`}>
            <h1 className='font-bold text-2xl '>{prod.name}</h1>
          </Link>
          <img className="w-48 pt-4" src={prod.image} alt={prod.name} />

          <div className='pt-4'>
            {/* <h1>{prod.name}</h1> */}
            <p>Description : {prod.shortDescription}</p>
            <p>Price : {prod.price}</p>
            <p>
              
              Quantity :
              <InputNumber
                min={1}
                max={10}
                value={changeVlaue}
                onChange={onChangeValue}
              />
            </p>
          </div>
          <button
            className="bg-blue-400 sm:rounded-md px-3 py-1 text-yellow-100 hover:bg-blue-700 "
            onClick={() => handleAddToCart(prod)}
          >
            Add To Cart
          </button>
        </div>
  )
}

export default Product
