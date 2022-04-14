import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import msgReducer from "./msgSlice";

export default configureStore({
    reducer:{
        cart: cartReducer,
        msg: msgReducer
    },
})