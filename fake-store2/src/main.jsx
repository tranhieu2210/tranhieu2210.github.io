import React from 'react'
import ReactDOM from 'react-dom'
import  "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/Home";
import Category from "./page/Category";
import Cart from "./page/Cart";
import Product from "./page/ProductDetail";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Home />}></Route>
          <Route path='/category' element = {<Category />}></Route>
          <Route path='/product/:productId' element = {<Product />}></Route>
          {/* <Route  element = {<Home />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
