const initialState={
    cartItems:[],
}

    const cartReducer=(state=initialState,action)=>{
        if(action.type==='ADD_TO_CART'){
            return {
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
        }
        else if(action.type==='REMOVE_ITEM'){
            // console.log(action.payload);
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=>item.id!==action.payload)
            }
        }
        return state;
    }
    export {cartReducer}