import { authTypes } from "../../type/auth/auth";
import { GET, POST } from "../../../services/api";
import {toast} from "react-toastify"

export const allProducts = (callback) => {
    return async (dispatch) => {
        dispatch({
            type: authTypes.ALL_PRODUCT_PENDING
        });
        const res = await GET("products");
        if(res){
            dispatch({
                type: authTypes.ALL_PRODUCT_SUCCESS,
                payload: res
            });
            toast.success("Login Successfully");
            callback(res);
        }else{
            toast.error("Please try again");
        }
    }
}

export const searchProducts = (search,callback) => {
    return async (dispatch) => {
        dispatch({
            type: authTypes.SEARCH_PRODUCT_PENDING
        });
        const res = await GET(`products/search?q=${search}`);
        if(res){
            dispatch({
                type: authTypes.SEARCH_PRODUCT_SUCCESS,
                payload: res
            });
            toast.success("Login Successfully");
            callback(res?.data?.products);
        }else{
            toast.error("Please try again");
        }
    }
}

export const singleProducts = (id,callback) => {
    return async (dispatch) => {
        dispatch({
            type: authTypes.SINGLE_PRODUCT_PENDING
        });
        const res = await GET(`products/${id}`);
        if(res){
            dispatch({
                type: authTypes.SINGLE_PRODUCT_SUCCESS,
                payload: res
            });
            toast.success("Login Successfully");
            callback(res?.data);
        }else{
            toast.error("Please try again");
        }
    }
}

