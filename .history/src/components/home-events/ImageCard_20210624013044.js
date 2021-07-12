import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Card = (props) => {
    const {image} = props;
    return(
        <ImageBackground style={styles.container} source={image}>

        </ImageBackground>
    )
}
export default Card;

const styles = StyleSheet.create({
    container:{
        height:hp('20%'),
        width:'100%',
    }
})