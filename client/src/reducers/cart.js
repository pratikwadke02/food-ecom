import * as actionType from '../constants/actionTypes';

const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            // console.log(state.cart)
            // console.log(state.cart.filter((item) => item.id == action.data.id)[0])
            if(state.cart.filter((item) => item.id == action.data.id).length > 0){
                state.cart.map((item, index) => {
                    if(item.id == action.data.id){
                        item.quantity += 1;
                    }
                })
            }else{
                action.data.quantity = 1;
                return { ...state, cart: [...state.cart, action.data] };
            }
            return state;
        case actionType.GET_CART:
            console.log("inside cart reducer");
            console.log(action.payload);
            return { ...state, cart: action.payload };
        case actionType.INCREMENT:
            console.log(action.id);
            state.cart.map((item, index) => {
                console.log(item.id);
                if(item.id == action.id){
                    item.quantity += 1;
                    console.log(item.quantity);
                }
            })
            return state;
        case actionType.DECREMENT:
            state.cart.map((item, index) => {
                if(item.id == action.id){
                    item.quantity -= 1;
                }
            })
            return state;
        case actionType.CLEAR_CART:
            return { ...state, cart: [] };
        default:
            return state;
    }
}

export default cartReducer;