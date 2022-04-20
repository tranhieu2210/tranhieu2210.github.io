import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    inittialState: 0,
    reducers : {
        add : (state, action) => {
            const item = state.find((item) => item.productId == action.payload);

            if (item) {
                item.quantity
            }
        },
    }
})




export default cartSlice.reducers;
export const {add, increase, decrease, clear} = cartSlice.actions; 