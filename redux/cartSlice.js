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
                state.cartIndex = 0
                state.quantity = 0
                state.products.push({cartInfo:action.payload, cartIndex: state.cartIndex});
                state.cartIndex += 1;
                state.quantity += 1;
                console.log('new cart item');
            }
            else if( state.products != []){
                state.products.forEach((product) => {
                    if(product.cartInfo._id === action.payload._id){
                        console.log('same');
                        product.cartInfo.Large += action.payload.Large;
                        product.cartInfo.Regular += action.payload.Regular;
                        product.cartInfo.qty += action.payload.qty;
                        product.cartInfo.subTotal += action.payload.subTotal;
                    }
                });

                //Check If Item is present.
                const itemPresent = state.products.some((product) => {
                    if(product.cartInfo._id === action.payload._id){
                        return true
                    }
                });
                if(!itemPresent){
                    state.products.push({cartInfo:action.payload, cartIndex: state.cartIndex});
                    state.cartIndex += 1;
                    state.quantity += 1;
                    console.log('new diff cart item');
                }


            }
            
            state.total += action.payload.subTotal;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.total -= action.payload.subTotal;
            state.cartIndex = state.products.length - 1;
            state.products.splice(action.payload.cartIndex, 1);
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