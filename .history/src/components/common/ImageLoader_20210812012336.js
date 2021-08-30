import React,{useState} from 'react';
import {
    View,
    Image
} from 'react-native';
import LottieView from 'lottie-react-native';

const ImageLoader = (props) => {
    const [isLoaded,setIsLoaded] = useState(false);
    return(
        <View>
            {!isLoaded && <LottieView style={[props.style,{position:'absolute'}]} source={require('../../assets/animation/loader.json')} autoPlay loop />}
            <Image
                style={props.style} 
                source={props.source}
                onLoad={()=>setIsLoaded(true)}
            />
        </View>
    )
}
export default ImageLoader;