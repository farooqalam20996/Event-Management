import {
    CATEGORIES_LOAD,
    CATEGORIES_LOAD_FAILED,
    CATEGORIES_LOAD_SUCCESS
} from "../constants";

const initialState = {
    failed:false,
    success:false,
    loader:false,
    error:"",
    Categories:[]
}

export default (state=initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LOAD:
            return { ...state, loader:true};
            
        case CATEGORIES_LOAD_SUCCESS:
            return { ...state, loader:false, success:true, Categories:action.payload};

        case CATEGORIES_LOAD_FAILED:
            return {...state, loader:false, failed:true, error:action.payload};
    
        default:
            return state;
    }
}