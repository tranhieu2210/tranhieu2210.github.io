import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Cart from "./Cart";


const Category = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then ((res) => res.json())
            .then ((json) => {
                setLoading(false);
                setProducts(json);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
    },[])

    if (loading) {
        return <p>Đợi chút</p>
    }

    if (error) {
        return <p>Opps! Lỗi rùi</p>
    }


    return (
        <main>
            <h2>Category</h2>

            {products.map((product) => (
                <Link key={product.id} to = {"/product/" + product.id} >
                    <div className="product">
                        <img src={product.image} alt={product.title} style={{maxWidth: "100px"}} />
                        <h3 className="product-name">{product.title}</h3>
                    </div>
                </Link>
            ))}
        </main>
    )
}


export default Category