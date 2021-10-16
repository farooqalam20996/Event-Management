import {
    IND_NAME,
    IND_EMAIL,
    IND_PASSWORD,
    IND_CONFIRM_PASSWORD,
    IND_FAILED,
    IND_SIGNUP,
    IND_SUCCESS,
} from "../constants";
import { API } from "../MainURL";
import { navigate } from "../Navigator";
import firebase from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

var axios = require('axios');
var FormData = require('form-data');


///////////////// User SignUp With Firebase ////////////////////////

export const Individual_SignUp = (Name, Email, Password, Confirm_password, toast) => {
    return(dispatch) => {
        dispatch({type: IND_SIGNUP})
        var data = new FormData();
        data.append('name', Name);
        data.append('email', Email);
        data.append('password', Password);
        data.append('c_password', Confirm_password);
        data.append('type', 'individual');

        AsyncStorage.getItem('uid', (err, uid)=> {
            if(uid){
                console.log(uid)
                data.append('firebase_id', JSON.parse(uid));
                var config = {
                    method: 'post',
                    url: API+'jacobanderson_app/public/api/register',
                    data : data
                };
                console.log(data)
        
                axios(config)
                .then(function (response) {
                    AsyncStorage.removeItem('uid')
                    if(response.data.success){
                        dispatch({type: IND_SUCCESS, error:''})
                        toast.show(response.data.message, 1000)
                        console.log(JSON.stringify(response.data));
                        navigate("Login")
                    }
                    else{
                        toast.show(response.data.message, 1000)
                        dispatch({type: IND_FAILED, error:response.data.message}),
                        console.log(JSON.stringify(response.data));
                    }
                })
                .catch(function (error) {
                    dispatch({type: IND_FAILED, error:"Something went wrong"}),
                    console.log(error);
                });
            }
            else{
                console.log('no id')
                firebase.auth.createUserWithEmailAndPassword(Email,Password)
                .then((res)=> {
                    firebase
                    .firestore.
                    collection('users').
                    doc(res.user.uid)
                    .set({
                        uid:res.user.uid,
                        email: Email,
                        name: Name,
                        active: false,
                    })
                    .then(()=>{
                        AsyncStorage.setItem('uid', JSON.stringify(res.user.uid), (err)=> err?true:false)
                        data.append('firebase_id', res.user.uid);
                        var config = {
                            method: 'post',
                            url: API+'jacobanderson_app/public/api/register',
                            data : data
                        };
                        console.log(data)
                        console.log(res.user)
                
                        axios(config)
                        .then(function (response) {
                            if(response.data.success){
                                AsyncStorage.removeItem('uid')
                                dispatch({type: IND_SUCCESS, error:''})
                                toast.show(response.data.message, 1000)
                                console.log(JSON.stringify(response.data));
                                navigate("Login")
                            }
                            else{
                                toast.show(response.data.message, 1000)
                                dispatch({type: IND_FAILED, error:response.data.message}),
                                console.log(JSON.stringify(response.data));
                            }
                        })
                        .catch(function (error) {
                            dispatch({type: IND_FAILED, error:"Something went wrong"}),
                            console.log(error);
                        });
                            console.log('User Created', res);
                    })
                    .catch(function (error) {
                        dispatch({type: IND_FAILED, error:"Something went wrong"}),
                        console.log(error);
                    });
                })
                .catch(function (error) {
                    dispatch({type: IND_FAILED, error:"Something went wrong"}),
                    console.log(error);
                });
               
            }
        })
    }
}



// export const Individual_SignUp = (Name, Email, Password, Confirm_password, toast) => {
//     return(dispatch) => {
//         dispatch({type: IND_SIGNUP})
//         var data = new FormData();
//         data.append('name', Name);
//         data.append('email', Email);
//         data.append('password', Password);
//         data.append('c_password', Confirm_password);
//         data.append('type', 'individual');

//         var config = {
//             method: 'post',
//             url: API+'jacobanderson_app/public/api/register',
//             data : data
//         };
//         console.log(data)

//         axios(config)
//         .then(function (response) {
//             if(response.data.success){
//                 dispatch({type: IND_SUCCESS, error:''})
//                 toast.show(response.data.message, 1000)
//                 console.log(JSON.stringify(response.data));
//                 navigate("Login")
//             }
//             else{
//                 toast.show(response.data.message, 1000)
//                 dispatch({type: IND_FAILED, error:response.data.message}),
//                 console.log(JSON.stringify(response.data));
//             }
//         })
//         .catch(function (error) {
//             dispatch({type: IND_FAILED, error:"Something went wrong"}),
//             console.log(error);
//         });
//     }
// }



export const Name = (text) => {
    return{
        type:IND_NAME,
        payload:text
    }
}

export const Email = (text) => {
    return{
        type:IND_EMAIL,
        payload:text
    }
}

export const Password = (text) => {
    return{
        type: IND_PASSWORD,
        payload: text
    }
}

export const Confirm_Password = (text) => {
    return{
        type: IND_CONFIRM_PASSWORD,
        payload: text   
    }
}