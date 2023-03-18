import { authTypes } from "../../type/auth/auth";

const initialState = {
    isLoading: false,
    user:null,
    msg:""
};

export const userAuthReducer = (state=initialState, action)=>{
    switch (action.type){
        case authTypes.POST_SIGN_PENDING:
            return{
                ...state,
                isLoading: action.isLoading,
                msg:""
            }
        case authTypes.POST_SIGN_SUCCESS:
            return{
                ...state,
                isLoading: action.isLoading,
                user: action.payload,
                msg:""
            }
        case authTypes.POST_SIGN_FAILED:
            return{
                ...state,
                isLoading: action.isLoading,
                user: action.payload,
                msg:""
            };
        default:
            return state;
    }
}