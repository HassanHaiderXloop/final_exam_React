import { InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductDetailsPage = ({ details }) => {
  const [product, setProduct] = useState({});
  const navigator = useNavigate();
  const loc = useLocation();
  const [changeVlaue, setChnageValue] = useState(1);

  useEffect(() => {
    setProduct(loc.state.prod);
  }, []);


  const handleAddToCart = (prod) =>{

 
    if(changeVlaue > 0){
        const requestData={
            name : product.name,
            image: product.image,
            quantity: changeVlaue,
            totalPrice: Number(product.price )* changeVlaue,
            price: Number(product.price),
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
  const onChangeValue = (event) => {
    setChnageValue(event);
    // console.log(changeVlaue);
  };

  return (
    <div className=" px-2 py-2">
    <div className="px-4 py-2 content-center border-solid border-2 border-gray-500 sm:rounded-md bg-gray-100">
      
      <div className='flex '>
        <img  width={500} src={product.image} alt={product.name} />
      </div>


      <div>
        <h1 className="py-2">{product.name}</h1>
        <h3 className="py-2"> Discription : {product.longDescription}</h3>
        <h3 className="py-2">Price : {product.price}</h3>
        <p>
              Quantity :
              <InputNumber
                min={1}
                max={10}
                value={changeVlaue}
                onChange={onChangeValue}
              />
            </p>
        <div className='py-5 '>
        
        <button
          className="bg-blue-400 sm:rounded-md px-3 py-1 text-yellow-100 hover:bg-blue-700 "
          onClick={handleAddToCart}>
          Add To Cart
        </button>

        <Link
          className="bg-gray-400 mx-8 sm:rounded-md px-3 py-2  text-white hover:bg-gray-700 "
          to="/"> Return To Home </Link>
          </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetailsPage;
// border-solid border-2