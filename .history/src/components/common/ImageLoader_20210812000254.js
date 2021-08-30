import React,{useState} from 'react';
import {
    View,
    Image
} from 'react-native';
import LottieView from 'lottie-react-native';

const ImageLoader = (props) => {
    const [isLoaded,setIsLoaded] = useState(false);
    const lottieStyle=[props.style,{borderRadius:0, position:'absolute'}]
    return(
        <View>
            {!isLoaded && <LottieView style={lottieStyle} source={require('../../assets/animation/loader.json')} autoPlay loop />}
            <Image
                style={props.style} 
                source={props.source}
                onLoad={()=>setIsLoaded(true)}
            />
        </View>
    )
}
export default ImageLoader;