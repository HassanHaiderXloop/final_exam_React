import React, { useEffect, useState } from 'react';
import ProductDetailsPage from './ProductDetailsPage';
import ProductList from './ProductList';

const GetingData = () => {


    const [getApi , setGetApi] = useState([]);

    const API = 'http://localhost:8080/product/all';

    const fetchGet = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setGetApi(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect (()=>{
        fetchGet(API);
    },[])


  return (
    <div> 
          <ProductList products={getApi}/>
    </div>
  )
}

export default GetingData;
