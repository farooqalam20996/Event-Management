import {
    CATEGORIES_LOAD,
    CATEGORIES_LOAD_FAILED,
    CATEGORIES_LOAD_SUCCESS,
} from "../constants";
import { API } from "../MainURL";

var axios = require('axios');


export const LoadCategories = () => {
    return (dispatch) => {
        dispatch({type: CATEGORIES_LOAD});
            var config = {
            method: 'get',
            url:API+'jacobanderson_app/public/api/get-categories',
        };

        axios(config)
        .then(function (response) {
            if(response.data.success){
                dispatch({type: CATEGORIES_LOAD_SUCCESS, payload: response.data.data});
                // toast.show(response.data.message, 1000)
                // console.log(JSON.stringify(response.data));
            }
            else{
                dispatch({type: CATEGORIES_LOAD_FAILED, error:response.data.message});
                // toast.show(response.data.message, 1000)
                // console.log(JSON.stringify(response.data));
            }
        })
        .catch(function (error) {
            dispatch({type: CATEGORIES_LOAD_FAILED, error:"Something Went Wrong"});
            // toast.show("Something went wrong", 1000)
            console.log(error);
        });
       
    }
}
