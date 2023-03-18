import { authTypes } from "../../type/auth/auth";

const initialState = {
    isLoading: false,
    products:null,
    msg:""
};

export const allProductsReducer = (state=initialState, action)=>{
    switch (action.type){
        case authTypes.ALL_PRODUCT_PENDING:
            return{
                ...state,
                isLoading: action.isLoading,
                msg:""
            }
        case authTypes.ALL_PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading: action.isLoading,
                products: action.payload,
                msg:""
            }
        case authTypes.ALL_PRODUCT_FAILED:
            return{
                ...state,
                isLoading: action.isLoading,
                products: action.payload,
                msg:""
            };
        default:
            return state;
    }
}

export const singleProductReducer = (state=initialState, action)=>{
    switch (action.type){
        case authTypes.SINGLE_PRODUCT_PENDING:
            return{
                ...state,
                isLoading: action.isLoading,
                msg:""
            }
        case authTypes.SINGLE_PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading: action.isLoading,
                products: action.payload,
                msg:""
            }
        case authTypes.SINGLE_PRODUCT_FAILED:
            return{
                ...state,
                isLoading: action.isLoading,
                products: action.payload,
                msg:""
            };
        default:
            return state;
    }
}