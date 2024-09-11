import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        categories: []
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setCategories(state, action) {
            state.categories = action.payload;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;