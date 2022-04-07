import { useState } from 'react'
import ProductItem from './compoment/ProductsItem'


function App() {
  const [products, setProducts] = useState();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <ProductItem 
       image= "https://cdn.honda.com.vn/motorbike-versions/August2020/8WKM4mZgOuXRyTDrSzhN.png"
       title = "CBR 1000RR-R"
       description = "Xe phan khoi lon"
       price = "20.000.000.000"
       />
    </div>
  )
}

export default App
