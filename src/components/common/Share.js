import React from 'react';
import { 
    Share,
 } from 'react-native';

export const Onshare =async (title, desc, url) => {
    try {
        const result = await Share.share({
            // title:title+ " From Jacob App",
            message:title+ " From Jacob App "+desc+" Link is here "+url+'jacobanderson_app/public/api/get-events'
    });
    if(result.action === Share.sharedAction){
        if(result.activityType){
            console.log("Shared")
        }
        else{
            console.log("Not Shared")
        }
    }   
    else if(result.action === Share.dismissedAction)
        {
            console.log("Dismissed")
        }
    } 
    catch (error) {
        alert(error.message)
    }
}