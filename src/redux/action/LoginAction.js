import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    DATA,
    TOKEN,
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS
} from "../constants";
import { API } from "../MainURL";
import * as Facebook from "expo-facebook";

var axios = require('axios');
var FormData = require('form-data');

export const Login = (Email, Password,fb_name, fb_id, context, toast) => {
    return(dispatch)=>{
        dispatch({type: LOGIN })
        var data = new FormData();
        data.append('email', Email);
        data.append('password', Password);
        data.append('fb_name',fb_name);
        data.append('fb_id',fb_id);

        var config = {
        method: 'post',
        url: API+'jacobanderson_app/public/api/login',
        data : data
        };

        axios(config)
        .then(async function (response) {
            if(response.data.success){
                dispatch({type: LOGIN_SUCCESS, error:''})
                // console.log(JSON.stringify(response.data.data));
                await AsyncStorage.setItem('user', JSON.stringify(response.data.data), (err)=> err?true:false)
                await AsyncStorage.setItem('paid', 'false', (err)=> err?true:false)
                context.updateState()
            }
            else{
                toast.show(response.data.message,1000)
                dispatch({type: LOGIN_FAILED, error:response.data.message })
                console.log(JSON.stringify(response.data.data));
            }
        
        })
        .catch(function (error) {
            dispatch({type: LOGIN_FAILED, error:"Something Went Wrong" })
            toast.show("Something Went Wrong",1000)
            console.log(error);
        });

    }
}

/////////////////////////// LOGIN FACEBOOK ///////////////////////

// export const FB_Login = async() => {
//     return(dispatch) => {
//         try {
//                 dispatch({type: LOGIN});
//                 await Facebook.initializeAsync({
//                     appId: '593054675199896',
//                 });
//                 const {
//                     type,
//                     token,
//                     expirationDate,
//                     permissions,
//                     declinedPermissions,
//                 } = await Facebook.logInWithReadPermissionsAsync({
//                     permissions: ['public_profile'],
//                 });
//                 if (type === 'success') {
//                     dispatch({type: LOGIN_SUCCESS})
//                     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//                     await AsyncStorage.setItem('userFB', response.json(), (err)=> err?true:false)
//                     await AsyncStorage.setItem('FBType', "individual", (err)=> err?true:false)
//                 //   Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);

//                 } 
//                 else {
//                     dispatch({type: LOGIN_FAILED})
//                     alert("There is some Problem");
//                 }
//             } 
//             catch ({ message }) {
//                 dispatch({type: LOGIN_FAILED})
//                 alert(`Facebook Login Error: ${message}`);
//             }
//     }
// }

 export const User_Data = (user)=> {
    return{
        type:DATA,
        payload:user
    }
}

export const User_Token = (token) => {
    return{
        type:TOKEN,
        payload:token   
    }
}
    