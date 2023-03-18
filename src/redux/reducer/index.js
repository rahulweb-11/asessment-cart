import { combineReducers } from "redux";
import { userAuthReducer } from "./auth/authReducer";
import { allProductsReducer, singleProductReducer } from "./product/productReducer";

export const rootReducer = combineReducers({
    auth: userAuthReducer,
    singleProduct: singleProductReducer
});