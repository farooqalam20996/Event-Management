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
        <ImageBackground imageStyle={{shadowColor:'black', shadowRadius:2, shadowOpacity:1, shadowOffset:{height:0, width:5}}} borderRadius={hp('1%')} style={styles.container} source={image}>

        </ImageBackground>
    )
}
export default ImageCard;

const styles = StyleSheet.create({
    container:{
        height:hp('27.5%'),
        width:'100%',
        marginTop:hp('2%'),
    }
})