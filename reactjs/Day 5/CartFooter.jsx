const CartFooter = (props) => {
    return (
        <div className="cart-footer">
            <div>
                <h4>Total</h4>
                <h4 className="total-price">{props.totalPrice}</h4>
            </div>
            <button>Clear All</button>
        </div>
    )
}