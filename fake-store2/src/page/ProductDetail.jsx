import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = (props) => {
    const {ProductId} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
}

const Product = (props) => {
    return (
        <main>
            <h2>{Product.tittle}</h2>
        </main>
    )
}


export default Product