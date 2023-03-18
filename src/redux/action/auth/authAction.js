import { authTypes } from "../../type/auth/auth";
import { POST } from "../../../services/api";
import {toast} from "react-toastify"

export const userLogin = (user,callback) => {
    return async (dispatch) => {
        dispatch({
            type: authTypes.POST_SIGN_PENDING
        });
        const res = await POST("auth/login",user);
        if(res){
            dispatch({
                type: authTypes.POST_SIGN_SUCCESS,
                payload: res
            });
            toast.success("Login Successfully");
            callback(res);
        }else{
            toast.error("Please try again");
        }
    }
}

export const userRegister = (user,callback) => {
    return async (dispatch) => {
        dispatch({
            type: authTypes.POST_SIGN_PENDING
        });
        const res = await POST("users/add",user);
        if(res){
            toast.success("Login Successfully");
            callback();
        }else{
            toast.error("Please try again");
        }
    }
}
