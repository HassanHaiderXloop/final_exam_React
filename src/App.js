import './App.css';
import NavBar from './Components/NavBar';
import ListPage from './Pages.js/GetingData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './Pages.js/ProductList';
import GetingData from './Pages.js/GetingData';
import { useState } from 'react';
import ProductDetailsPage from './Pages.js/ProductDetailsPage';
import ShoppingCart from './Pages.js/ShoppingCart';
import ThankYou from './Pages.js/ThankYou';


function App() {

  return (
    <>
    <NavBar/>
    <div>
    <Router>
        <Routes>
          <Route path="/" exact element={<GetingData/>} />
          <Route path="/details" exact element={<ProductDetailsPage/>} />
          <Route path="/shopping_cart" exact element={<ShoppingCart/>} />
          <Route path="/thanks" exact element={<ThankYou/>} />
        </Routes>
      </Router>

      
    </div>
    
    </>
  );
}

export default App;
