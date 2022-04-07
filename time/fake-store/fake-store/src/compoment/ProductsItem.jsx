import style from "./ProductsItem.module.css"


const ProductItem = (props) => {
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={props.image} alt={props.tittle} />
            </div>
            <div className="product-item-info">
                <p className="product-item-name">{props.title}</p>
                <p className="product-item-des">{props.description}</p>
                <p className="product-item-price">{props.price}</p>
            </div>
        </div>
    );
};


export default ProductItem