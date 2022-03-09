import {combineReducers} from "redux";
import amountReducer from "./amountReducer";

//This is used if we have more than one reducers and combine Reducers combines all the reducers in once place  
 const reducers = combineReducers(
    {
        amount : amountReducer  
    }
)

export default reducers