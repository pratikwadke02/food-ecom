import { GET_CART, ADD_TO_CART } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const addToCart = (id) => async(dispatch) => {
    try{
        const {data} = await api.getProductById(id);
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

 