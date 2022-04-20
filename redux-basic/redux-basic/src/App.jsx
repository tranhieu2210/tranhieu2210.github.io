import { useState, useCallback } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {useGetAllProductsQuery} from "./services/product.services"

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrease)}>decrease</button>
      <p>Count is {value}</p>
      <button onClick={() => dispatch(increase)}>increase</button>
      <button onClick={() => dispatch(reset)}>reset</button>
      <button onClick={() => dispatch(increaseBy())}>increaseBy</button>
      
    </div>
  )
}

export default App
