import { GET_CART, ADD_TO_CART } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const addToCart = (data) => async(dispatch) => {
    try{
        console.log(data);
        dispatch(
            {
                type: ADD_TO_CART,
                data
            }
        )
    }catch(error){
        console.log(error);
    }
};

 