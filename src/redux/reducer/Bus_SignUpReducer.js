import {
    BUS_SIGNUP,
    BUS_SUCCESS,
    BUS_FAILED,
    BUSINESS_NAME,
    BUSINESS_EMAIL,
    BUSINESS_PASSWORD,
    BUSINESS_CONF_PASSWORD,
    SELECT_CATEGORY,
    DESCRIPTION,
    PHONE_NUMBER,
    ADDRESSS_LINE2,
    ADDRESSS_LINE1,
    ADD_IMG
} from "../constants";

const initialState = {
    Failed:false,
    Success:false,
    Loader:false,
    Name:"",
    Email:"",
    Password:"",
    Conf_Password:"",
    Category:"",
    Description:"",
    PhoneNumber:"",
    Address1:"",
    Address2:"",
    AddImg:[],
}

export default(state= initialState, action) => {
    switch (action.type) {
        case BUS_SIGNUP:
           return { ...state, Loader:true} 
        
        case BUS_SUCCESS:
            return { ...state, Loader:false, Success:true, AddImg:null, ...initialState}

        case BUS_FAILED:
            return{ ...state, Failed: true, Loader:false, error:action.error}
    
        case BUSINESS_NAME:
            return { ...state, Name: action.payload}

        case BUSINESS_EMAIL:
            return { ...state, Email: action.payload}

        case BUSINESS_PASSWORD:
            return{ ...state, Password: action.payload }
    
        case BUSINESS_CONF_PASSWORD:
            return{ ...state,  Conf_Password:action.payload }

        case SELECT_CATEGORY:
            return{ ...state,  Category:action.payload }

        case DESCRIPTION:
            return{ ...state,  Description:action.payload }

        case PHONE_NUMBER:
            return{ ...state,  PhoneNumber:action.payload }

        case ADDRESSS_LINE1:
            return{ ...state,  Address1:action.payload }

        case ADDRESSS_LINE2:
            return{ ...state,  Address2:action.payload }
            
        case ADD_IMG:
            return { ...state, AddImg:action.payload};

        default:
            return state;
    }
}