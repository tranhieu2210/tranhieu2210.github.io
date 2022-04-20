import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./reducer/counter.slice";
import cartReducer from "./reducer/cart.slice";
import  productReducer  from "./reducer/product.slice";

const store = configureStore({
    reducers : {
        counter : counterReducer,
        cart : cartReducer,
        product : productReducer,
    },
});


export default store;