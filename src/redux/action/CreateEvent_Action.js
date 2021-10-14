import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import { Platform } from "react-native";
import {
    EVENT_CREATE,
    EVENT_FAILED,
    EVENT_SUCCESS,
    EVENT_NAME,
    EVENT_CATEGORY,
    EVENT_DESCRIPTION,
    EVENT_PHONE_NUMBER,
    EVENT_ADD1,
    EVENT_ADD2,
    EVENT_DATE,
    EVENT_TIME,
    EVENT_RESERVATION,
    EVENT_IMG1,
    EVENT_IMG2,
    EVENT_IMG3,
    EVENT_IMG4
} from "../constants";
import { API } from "../MainURL";
// import {useSelector} from "react-redux";

var axios = require('axios');
var FormData = require('form-data');

   

export const Creating_Event = (token, EventName, EventCategory, EventDescription, EventPhoneNumber, EventAdd1, EventAdd2, EventDate,  /*EventTime,*/ EventReservation, EventImg1,userid) => {
   
    // const token = useSelector(state=> state.LoginReducer.token)

    // const [userid, setUserid]=useState(null);

    // useEffect(()=> {
    //     AsyncStorage.getItem('user',(err, data)=>{
    //         setUserid(JSON.parse(data).id)
    //     })
    // })

    return(dispatch) => {
        dispatch({type:EVENT_CREATE});

        var data = new FormData();
        data.append('name', EventName);
        data.append('category_id', EventCategory);
        data.append('user_id', userid);
        data.append('description', EventDescription);
        data.append('phone', EventPhoneNumber);
        data.append('address1', EventAdd1);
        data.append('address2',EventAdd2);
        data.append('date', EventDate );
        data.append('reservation',EventReservation);
        EventImg1.forEach((element, i )=> {
            const newFile = {
                name: "images.jpg",
                type: "images/jpeg",
                uri: Platform.OS === "android" ?element : element.replace("file://", "")
            }  
            data.append("images[]", newFile)
        })

        var config = {
        method: 'post',
        url: API+'jacobanderson_app/public/api/create-event',
        headers: { 
            'Authorization': 'Bearer '+token, 
        },
            data : data
        };
        console.log("Checking....", config)
        axios(config)
        .then(function (response) {
            if(response.data.success){
                dispatch({type:EVENT_SUCCESS})
                console.log(JSON.stringify(response.data));
            }
            else{
                dispatch({type:EVENT_FAILED})
                console.log(JSON.stringify(response.data));
            }
        })
        .catch(function (error) {
            dispatch({type:EVENT_FAILED})
            console.log(error);
        });
    }
}

export const EventName = (text) =>{
    return{
        type:EVENT_NAME,
        payload:text
    }
}

export const EventCategory = (text) =>{
    return{
        type:EVENT_CATEGORY,
        payload:text
    }
}

export const EventDescription = (text) =>{
    return{
        type:EVENT_DESCRIPTION,
        payload:text
    }
}

export const EventPhoneNumber = (text) =>{
    return{
        type:EVENT_PHONE_NUMBER,
        payload:text
    }
}

export const EventAdd1 = (text) =>{
    return{
        type:EVENT_ADD1,
        payload:text
    }
}

export const EventAdd2 = (text) =>{
    return{
        type:EVENT_ADD2,
        payload:text
    }
}


export const EventDate = (text) =>{
    return{
        type:EVENT_DATE,
        payload:text
    }
}

// export const EventTime = (text) =>{
//     return{
//         type:EVENT_TIME,
//         payload:text
//     }
// }

export const EventReservation = (text) =>{
    return{
        type:EVENT_RESERVATION,
        payload:text
    }
}

export const EventImg1 = (image, ImageArray=[]) =>{
    const images = ImageArray
    images.push(image)
    
    return{
        type:EVENT_IMG1,
        payload:images
    }
}

// export const EventImg2 = (text) =>{
//     return{
//         type:EVENT_IMG2,
//         payload:text
//     }
// }

// export const EventImg3 = (text) =>{
//     return{
//         type:EVENT_IMG3,
//         payload:text
//     }
// }

// export const EventImg4 = (text) =>{
//     return{
//         type:EVENT_IMG4,
//         payload:text
//     }
// }