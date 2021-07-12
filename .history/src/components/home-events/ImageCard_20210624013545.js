import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ImageCard = (props) => {
    const {image} = props;
    return(
        <View style={{borderRadius:hp('2%')}}>
            <ImageBackground style={styles.container} source={image}>

            </ImageBackground>
        </View>
    )
}
export default ImageCard;

const styles = StyleSheet.create({
    container:{
        height:hp('25%'),
        width:'100%',
        marginTop:hp('2%'),
    }
})