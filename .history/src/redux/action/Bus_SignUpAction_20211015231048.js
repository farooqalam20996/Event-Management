import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { API } from "../MainURL";
import { navigate } from "../Navigator";
import firebase from '../../firebase';

var axios = require('axios');
var FormData = require('form-data');

export const Business_SignUp = (Name, Email, Password, Conf_Password, Category, Description, PhoneNumber, Address1, Address2,AddImg, toast) => {
    return(dispatch) => {
        dispatch({type: BUS_SIGNUP})
        var data = new FormData();
        data.append('name', Name);
        data.append('email', Email);
        data.append('password', Password);
        data.append('c_password', Conf_Password);
        data.append('category', Category);
        data.append('type', 'company');
        data.append('description', Description);
        data.append('phone', PhoneNumber);
        data.append('address1', Address1);
        data.append('address2', Address2);
        AddImg.forEach((element, i )=> {
            const newFile = {
                name: "images.jpg",
                type: "images/jpeg",
                uri: Platform.OS === "android" ?element : element.replace("file://", "")
            }  
            data.append("images[]", newFile)
        })
        AsyncStorage.getItem('uid', (err, uid)=> {
            if(uid){
                console.log('firebase_id',uid)
                data.append('firebase_id', JSON.parse(uid));
                var config = {
                    method: 'post',
                    url: API+'jacobanderson_app/public/api/register',
                    data : data
                };
                console.log(data)
                axios(config)
                .then( function (response) {
                    if(response.data.success){
                        dispatch({type: BUS_SUCCESS})
                        toast.show(response.data.message, 1000)
                        console.log(JSON.stringify(response.data));
                        navigate("Login")
                    }
                    else{
                        dispatch({type: BUS_FAILED})
                        toast.show(response.data.message, 1000)
                        console.log(JSON.stringify(response.data));
                    }
                })
                .catch(function (error) {
                    dispatch({type: BUS_FAILED})
                    toast.show("Something Went Wrong", 1000)
                    console.log("Catch ",error);
                });
            }else{
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
                        axios(config)
                        .then( function (response) {
                            if(response.data.success){
                                dispatch({type: BUS_SUCCESS})
                                toast.show(response.data.message, 1000)
                                console.log(JSON.stringify(response.data));
                                navigate("Login")
                            }
                            else{
                                dispatch({type: BUS_FAILED})
                                toast.show(response.data.message, 1000)
                                console.log(JSON.stringify(response.data));
                            }
                        })
                        .catch(function (error) {
                            dispatch({type: BUS_FAILED})
                            toast.show("Something Went Wrong", 1000)
                            console.log("Catch ",error);
                        });
                    })
                    .catch(function (error) {
                        dispatch({type: BUS_FAILED})
                        toast.show("Something Went Wrong", 1000)
                        console.log("Catch ",error);
                    });
                })
                .catch(function (error) {
                    dispatch({type: BUS_FAILED})
                    toast.show("Something Went Wrong", 1000)
                    console.log("Catch ",error);
                });
            }
        })
    }
}

export const Name = (text) => {
    return{
        type:BUSINESS_NAME,
        payload:text
    }
}

export const Email = (text) => {
    return{
        type:BUSINESS_EMAIL,
        payload:text
    }
}

export const Password = (text) => {
    return{
        type: BUSINESS_PASSWORD,
        payload: text
    }
}

export const Confirm_Password = (text) => {
    return{
        type: BUSINESS_CONF_PASSWORD,
        payload: text   
    }
}

export const Category = (text) => {
    return{
        type:SELECT_CATEGORY,
        payload:text
    }
}

export const Descrition = (text) => {
    return{
        type:DESCRIPTION,
        payload:text
    }
}

export const PhoneNumber = (text) => {
    return{
        type: PHONE_NUMBER,
        payload: text
    }
}

export const AddressLine1 = (text) => {
    return{
        type: ADDRESSS_LINE1,
        payload: text   
    }
}

export const AddressLine2 = (text) => {
    return{
        type: ADDRESSS_LINE2,
        payload: text   
    }
}

export const AddImg = (image, ImageArray=[]) =>{
    const images = ImageArray
    images.push(image)
    
    return{
        type:ADD_IMG,
        payload:images
    }
}