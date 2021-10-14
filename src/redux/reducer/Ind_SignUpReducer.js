import {
    IND_NAME,
    IND_EMAIL,
    IND_PASSWORD,
    IND_CONFIRM_PASSWORD,
    IND_FAILED,
    IND_SIGNUP,
    IND_SUCCESS,    
} from "../constants";

const initialState = {
    Name:"",
    Email:"",
    Password:"",
    Confirm_Password:"",
    Failed:false,
    Success:false,
    error:"",
    Loader:false
}

export default ( state=initialState, action ) => {
    switch (action.type) {
        case IND_SIGNUP:
           return { ...state, Loader:true} 
        
        case IND_SUCCESS:
            return { ...state, Loader:false, Success:true, ...initialState}

        case IND_FAILED:
            return{ ...state, Failed: true, Loader:false, error:action.error}
    
        case IND_NAME:
            return { ...state, Name: action.payload}

        case IND_EMAIL:
            return { ...state, Email: action.payload}

        case IND_PASSWORD:
            return{ ...state, Password: action.payload }
    
        case IND_CONFIRM_PASSWORD:
            return{ ...state,  Confirm_Password:action.payload }

        default:
            return state;
    }
}