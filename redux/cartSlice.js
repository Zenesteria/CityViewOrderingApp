import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity: 0,
        total: 0,
        cartIndex:0
    },
    reducers:{
        addProduct:(state, action) => {
            if(state.products.length === 0){
                state.products.push({cartInfo:action.payload, cartIndex: state.cartIndex});
                state.cartIndex += 1;
                state.quantity += 1;
                console.log('new cart item');
            }
            else if( state.products != []){
                state.products.forEach((product) => {
                    if(product.cartInfo._id === action.payload._id){
                        console.log('same');
                        product.cartInfo.quantity += action.payload.quantity;
                    }
                    else if(product.cartInfo._id != action.payload._id){
                        console.log(console.log('different'));
                        state.products.push({cartInfo:action.payload, cartIndex: state.cartIndex});
                        state.cartIndex += 1;
                        state.quantity += 1;
                    }
                });
            }
            
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.total -= action.payload.price * action.payload.quantity;
            state.products.splice(action.payload.cartIndex, 1);
            state.cartIndex = state.products.length - 1;
            state.products.forEach((product, index) => {
                product.cartIndex = index;
            });
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const {addProduct, reset, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;