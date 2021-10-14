import React from 'react';
import Toast, {DURATION} from 'react-native-easy-toast';

export class Toast{

    render(){
        return(
            <Toast 
                ref={(toast) => this.toast = toast}
                style={{backgroundColor:"red", width:"96%", zIndex:1}}
                position="bottom"
                positionValue={hp("2%")}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
            />
        )
    }
}