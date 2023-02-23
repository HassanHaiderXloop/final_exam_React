import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputNumber } from "antd";
import Product from "./Product";

function ProductList({ products }) {
    const navigator =  useNavigate();
  const chizyn = products;
  return (
    <div className="py-2 px-2 my-2 border-solid border-2 border-gray-500 sm:rounded-md bg-gray-100">
      {chizyn.map((prod) => (<Product key={prod.id} prod={prod}/>
       
      ))}
    </div>
  );
}
export default ProductList;
