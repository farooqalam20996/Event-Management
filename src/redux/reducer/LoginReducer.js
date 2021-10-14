import {
    LOGIN_FAILED,
    LOGIN,
    LOGIN_SUCCESS,
    DATA,
    TOKEN
} from "../constants";

const initialState = {
    Loader:false,
    Failed:false,
    User:"",
    Token:"",
    error:""
}


export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{...state, Loader:true }
    
        case LOGIN_FAILED:
            return { ...state, Failed:true, error:action.error, Loader:false }

        case LOGIN_SUCCESS:
            return {...state, Loader:false, Failed:false, ...initialState}

        case DATA:
            return { ...state, User: action.payload}

        case TOKEN:
            return { ...state, Token: action.payload}

        default:
            return state;
    }
}