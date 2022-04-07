const Cart = (props) => {
    return (
        <div className = "cart-container">
            <img src={props.image} alt="" />
            <CartItem
            />
            <changeQuantity />
        </div>
    )
}


const CartItem = (props) => {
    return (
        <div>
            <div className = "item-name">
                {props.name}
            </div>
            <div className = "item-price">
                {props.price}
            </div>
            <div className = "remove">

            </div>
        </div>
    )
}



const changeQuantity = (props) => {
    return (
        <div className = "ins-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path></svg>
        </div>
    )

}