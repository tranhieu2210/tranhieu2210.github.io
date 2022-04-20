import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    inittialState: 0,
    reducers: {
        increase: (state) => state + 1,
        decrease: (state) => state - 1,
        increaseBy: (state, payload) => state + payload,
        decreaseBy: (state, payload) => state - payload,
        reset: (state) => 0
    }
});

export default counterSlice.reducer;
export const { increase, decrease, increaseBy, decreaseBy, reset } = counterSlice.actions;