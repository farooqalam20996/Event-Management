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
        <ImageBackground imageStyle={styles.other} borderRadius={hp('1%')} style={styles.container} source={image}>

        </ImageBackground>
    )
}
export default ImageCard;

const styles = StyleSheet.create({
    container:{
        height:hp('27.5%'),
        width:'100%',
        marginTop:hp('2%'),

       
    },
    other:{
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 10,
        backgroundColor : "#000"
    }

})