import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Ind_SignUpReducer from "../reducer/Ind_SignUpReducer";
import Bus_SignUpReducer from "../reducer/Bus_SignUpReducer";
import LoginReducer from "../reducer/LoginReducer";
import CreateEvent_Reducer from "../reducer/CreateEvent_Reducer";
import Categories_reducer from "../reducer/Categories_reducer";

const rootReducer = combineReducers(
    {
        Ind_SignUpReducer:Ind_SignUpReducer,
        Bus_SignUpReducer:Bus_SignUpReducer,
        LoginReducer:LoginReducer,
        Categories_reducer:Categories_reducer,
        CreateEvent_Reducer:CreateEvent_Reducer
    }
)

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;