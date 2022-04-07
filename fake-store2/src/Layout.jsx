import { useState, useEffect, useCallback, createContext } from 'react'
import { Outlet } from "react-router-dom";
import  Header  from "./compoment/Header";
import React from "react";

const AppContext = React.createContext([]);

function Layout() {
  const [cart, setCart] = useState([]);
  const addToCart = useCallback(({id, quantity}) => {
    setCart([...cart, {id, quantity}])
   }, []);
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
