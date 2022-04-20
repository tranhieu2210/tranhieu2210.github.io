import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "product",
    inittialState: {
        isLoading : false,
        error: null,
        data: [],
    },
    reducer : {
        request : (state) => {
            state.isLoading = true;
        },
        success: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        failure:  (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        },
    }
})

export default productSlice.reducer;
export const {request, success, failure} = productSlice.actions;