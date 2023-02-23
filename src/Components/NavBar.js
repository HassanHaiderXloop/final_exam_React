import React from "react";
import styled from "../Components/navbar.module.css";

const NavBar = () => {
  return (
    <div className="bg-gray-800" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div>
        <img
          className={styled.navbar}
          src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"
        ></img>
      </div>
      <div>
        <h1  className="text-bold font-bold text-2xl text-white text-center">
          Shoping Cart
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;
